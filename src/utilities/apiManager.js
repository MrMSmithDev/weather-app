const apiManager = (() => {
  let units = 'imperial'
  const apiKey = '43df7ed317e5646ac516d5c73acdd3fc'

  async function getLocationData(searchTerm) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${apiKey}`,
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