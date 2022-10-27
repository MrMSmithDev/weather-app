import { addDays, addHours } from 'date-fns'

const apiManager = (() => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  let units = 'metric'
  const weatherApiKey = '43df7ed317e5646ac516d5c73acdd3fc'
  const timeApiKey = '33e3dc4721d649b0afc20275874a88fb'

  const noNumRegEx = /\d/
  const lonLatRegEx = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/
  const usZipRegEx = /\^[0-9]{5}(?:-[0-9]{4})?$/
  const gbPostRegEx = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i

  function checkSearchType(searchTerm) {
    if (!searchTerm.match(noNumRegEx)) return 'locationName'
    if (searchTerm.match(gbPostRegEx)) return 'postcodeGB'
    if (searchTerm.match(usZipRegEx)) return 'postcodeUS'
    if (searchTerm.match(lonLatRegEx)) return 'lonLat'
    return 'unknown'
  }

  function createSearchQuery(searchTerm, searchType) {
    let searchQuery

    if (searchType === 'locationName' || searchType === 'unknown') searchQuery = `direct?q=${searchTerm}`
    if (searchType === 'postcodeGB') searchQuery = `zip?zip=${searchTerm},GB`
    if (searchType === 'postcodeUS') searchQuery = `zip?zip=${searchTerm},US`
    if (searchType === 'lonLat') {
      const splitSearch = searchTerm.replace(/\s/, '').split(',')
      searchQuery = `reverse?lat=${splitSearch[0]}&lon=${splitSearch[1]}`
    }
    return searchQuery
  }

  function createDateArray(today) {
    const dateArr = []

    for (let i = 0; i < 7; i += 1) {
      const simulatedDate =  addDays(today, i)
      dateArr.push(simulatedDate)
    }
    return dateArr
  }

  async function getLocationData(searchTerm) {
    const searchType = checkSearchType(searchTerm)
    const searchQuery = createSearchQuery(searchTerm, searchType)

    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/${searchQuery}&limit=1&appid=${weatherApiKey}`,
      {mode: 'cors'},
    )
    const data = await response.json()

    // If the search is for postcode, 
    if (searchType === 'postcodeGB' || searchType === 'postcodeUS') {
      return {
        name: data.name,
        lat: data.lat,
        lon: data.lon
      }
    }
    return {
      name: data[0].name,
      lat: data[0].lat,
      lon: data[0].lon
    }
  }

  async function getWeatherData(lat, lon) {

    const formatTime = (dateObject) => {
      const formattedHours = dateObject.getHours().toLocaleString('en-UK', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
      const formattedMinutes = dateObject.getMinutes().toLocaleString('en-UK', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
      return `${formattedHours}:${formattedMinutes}`
    }

    const responses = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=${units}`,
        {mode: 'cors'}),
      fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${timeApiKey}`,
        {mode: 'cors'})
    ])
    const responseData = await Promise.all(responses.map((response) => response.json()))
    const weatherResponseData = responseData[0]
    const timeResponseData = responseData[1]

    const timeDifference = (timeResponseData.features[0].properties.timezone.offset_STD_seconds / 60) / 60
    const currentDateTime = addHours(new Date(), timeDifference) 

    const dateArr = createDateArray(currentDateTime)

    return {
      location: timeResponseData.features[0].properties.city,
      country: timeResponseData.features[0].properties.country,
      time: formatTime(currentDateTime),
      forecast: [
        {
          day: days[dateArr[0].getDay()],
          date: `${[dateArr[0].getDate()]} ${months[dateArr[0].getMonth()]}`,
          temp: Math.floor(weatherResponseData.list[0].main.temp),
          weather: {
            weatherID: weatherResponseData.list[0].weather[0].id.toString(),
            weatherType: weatherResponseData.list[0].weather[0].description
          },
          humidity: weatherResponseData.list[0].main.humidity,
          feelsLike: Math.floor(weatherResponseData.list[0].main.feels_like),
          windSpeed: weatherResponseData.list[0].wind.speed
        },
        {
          day: days[dateArr[1].getDay()],
          date: `${dateArr[1].getDate()} ${months[dateArr[1].getMonth()]}`,
          temp: Math.floor(weatherResponseData.list[8].main.temp),
          weather: {
            weatherID: weatherResponseData.list[8].weather[0].id.toString(),
            weatherType: weatherResponseData.list[8].weather[0].description
          },
          humidity: weatherResponseData.list[8].main.humidity,
          feelsLike: Math.floor(weatherResponseData.list[8].main.feels_like),
          windSpeed: weatherResponseData.list[8].wind.speed
        },
        {
          day: days[dateArr[2].getDay()],
          date: `${dateArr[2].getDate()} ${months[dateArr[2].getMonth()]}`,
          temp: Math.floor(weatherResponseData.list[16].main.temp),
          weather: {
            weatherID: weatherResponseData.list[16].weather[0].id.toString(),
            weatherType: weatherResponseData.list[16].weather[0].description
          },
          humidity: weatherResponseData.list[16].main.humidity,
          feelsLike: Math.floor(weatherResponseData.list[16].main.feels_like),
          windSpeed: weatherResponseData.list[16].wind.speed
        },
        {
          day: days[dateArr[3].getDay()],
          date: `${dateArr[3].getDate()} ${months[dateArr[3].getMonth()]}`,
          temp: Math.floor(weatherResponseData.list[24].main.temp),
          weather: {
            weatherID: weatherResponseData.list[24].weather[0].id.toString(),
            weatherType: weatherResponseData.list[24].weather[0].description
          },
          humidity: weatherResponseData.list[24].main.humidity,
          feelsLike: Math.floor(weatherResponseData.list[24].main.feels_like),
          windSpeed: weatherResponseData.list[24].wind.speed
        },
        {
          day: days[dateArr[4].getDay()],
          date: `${dateArr[4].getDate()} ${months[dateArr[4].getMonth()]}`,
          temp: Math.floor(weatherResponseData.list[32].main.temp),
          weather: {
            weatherID: weatherResponseData.list[32].weather[0].id.toString(),
            weatherType: weatherResponseData.list[32].weather[0].description
          },
          humidity: weatherResponseData.list[32].main.humidity,
          feelsLike: Math.floor(weatherResponseData.list[32].main.feels_like),
          windSpeed: weatherResponseData.list[32].wind.speed
        },
      ]
    }
  }

  // Return functions

  async function makeLocationSearch(location) {
    const locationData = await getLocationData(location)
    const weatherData = await getWeatherData(locationData.lat, locationData.lon)
    return weatherData
  }

  function getCurrentUnits() {
    if (units === 'metric') {
      return {
        temp: 'C',
        speed: 'm/s'
      }
    }
    return {
      temp: 'F',
      speed: 'mph'
    }
  }

  function changeApiUnits() {
    if (units === 'imperial') {
      units = 'metric'
    } else {
      units = 'imperial'
    }
    return units
  }

  return {
    makeLocationSearch,
    getCurrentUnits,
    changeApiUnits,
  }

})()

export default apiManager