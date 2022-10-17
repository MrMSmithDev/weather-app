const apiManager = (() => {
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

  async function getWeatherData(location) {
    try {
      const response = await fetch(
        `API CALL${location}`,
        {mode: 'cors'},
      )
      const responseData = await response.json()
      console.log(responseData)
    } catch(err) {
      console.log(err)
    }
  }

  async function makeLocationSearch(location) {
    const coordinatesData = await getLocationData(location)
    const weatherData = await getWeatherData(coordinatesData)
    return weatherData
  }

  return {
    makeLocationSearch,  
  }

})()

export default apiManager