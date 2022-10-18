const apiManager = (() => {
  let units = 'metric'
  const apiKey = '43df7ed317e5646ac516d5c73acdd3fc'

  const noNumRegEx = /[0-9+]$/
  const lonLatRegEx = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/
  const usZipRegEx = /\^[0-9]{5}(?:-[0-9]{4})?$/
  const gbPostRegEx = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i

  function checkSearchType(searchTerm) {
    if (!searchTerm.match(noNumRegEx)) return 'locationName'
    if (searchTerm.match(usZipRegEx) || searchTerm.match(gbPostRegEx)) return 'postcode'
    if (searchTerm.match(lonLatRegEx)) return 'lonLat'
    return 'unknown'
  }

  async function getLocationData(searchTerm) {
    let searchQuery
    const searchType = checkSearchType(searchTerm)

    if (searchType === 'LocationName' || searchType === 'unknown') searchQuery = `direct?q=${searchTerm}`
    if (searchType === 'postcode') searchQuery = `zip?zip=${searchTerm}`
    if (searchType === 'lonLat') {
      const splitSearch = searchTerm.replace(/\s/, '').split(',')
      searchQuery = `reverse?lat=${splitSearch[0]}&lon=${splitSearch[1]}`
    }

    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/${searchQuery}&limit=1&appid=${apiKey}`,
        {mode: 'cors'},
      )
      const responseData = await response.json()
      console.log(responseData)
    } catch (err) {
      console.log(err)
    } 
  }

  async function getWeatherData(lat, lon) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
        {mode: 'cors'},
      )
      const responseData = await response.json()
      console.log(responseData)
    } catch(err) {
      console.log(err)
    }
  }

  // Return functions

  async function makeLocationSearch(location) {
    const coordinatesData = await getLocationData(location)
    const weatherData = await getWeatherData(coordinatesData)
    return weatherData
  }

  function changeApiUnits() {
    if (units === 'imperial') {
      units = 'metric'
    } else {
      units = 'imperial'
    }
  }

  return {
    makeLocationSearch,
    changeApiUnits,
  }

})()

export default apiManager