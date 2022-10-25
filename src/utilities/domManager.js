/* eslint-disable no-unused-vars */
const domManager = (() => {

  // Utility functions

  function createClassElement(element, ...classes) {
    const newElement = document.createElement(element)
    classes.forEach((className) => newElement.classList.add(className))
    return newElement
  }

  function createTextElement(element, text) {
    const newElement = document.createElement(element)
    newElement.textContent = text
    return newElement
  }

  HTMLElement.prototype.appendChildren = function appendChildren(...elementsToAppend) {
    elementsToAppend.forEach((element) => this.appendChild(element))
    return this
  }

  HTMLElement.prototype.setAttributes = function setAttributes(attributeObject) {
    Object.keys(attributeObject).forEach((key) => this.setAttribute(key, attributeObject[key]))
  }

  function retrieveWeatherIcon(weatherID) {
    if (weatherID.match(/^800/)) return 'fa-sun' // Change these to icon classes.
    if (weatherID.match(/^8/)) return 'fa-cloud'
    if (weatherID.match(/^(3|5)/)) return 'fa-cloud-rain'
    if (weatherID.match(/^2/)) return 'fa-cloud-bolt'
    if (weatherID.match(/^6/)) return 'fa-snowflake'
    return 'fa-smog'
  }

  // Information div creation

  const weatherInfo = {
    location: 'Bristol',
    country: 'United Kingdom',
    day: 'Tuesday',
    date: '24 Oct',
    time: '09:45',
    weather: 'Cloudy',
    temp: 22,
    feelsLike: 23,
    windSpeed: 14,
    humidity: '85%',
  }

  // Initial DOM creation

  function createCurrentHeadlines() {
    const headlinesContainer = createClassElement('div', 'current-headlines')

    const dateHeadline = createTextElement('p', `${weatherInfo.day} ${weatherInfo.date}`)
    const timeHeadline = createTextElement('p', weatherInfo.time)
    const locationHeadline = createTextElement('h1', weatherInfo.location)
    const countryHeadline = createTextElement('p', weatherInfo.country)
    const weatherHeadline = createTextElement('h1', weatherInfo.weather)
    const tempHeadline = createTextElement('h1', `${weatherInfo.temp}°`)
    
    return headlinesContainer.appendChildren(
      dateHeadline,
      timeHeadline,
      locationHeadline,
      countryHeadline,
      weatherHeadline,
      tempHeadline,
    )
  }

  function createCurrentExtras() {
    const addGrid = (icon, title, data) => {
      const grid = createClassElement('div', 'extras-grid')
      const iconSpace = createClassElement('div', 'extras-icon')
      const iconChar = document.createElement('i')
      icon.forEach((className) => iconChar.classList.add(className))
      iconSpace.appendChild(iconChar)
      const titleSpace = createClassElement('div', 'extras-title')
      titleSpace.textContent = title
      const dataSpace = createClassElement('div', 'extras-data')
      dataSpace.textContent = data
      return grid.appendChildren(iconSpace, titleSpace, dataSpace)
    }

    const extrasContainer = createClassElement('div', 'current-extras')

    const windGrid = addGrid(['fa-solid', 'fa-wind'], 'Wind Speed', `${weatherInfo.windSpeed}mph`)
    const Humidity = addGrid(['fa-solid', 'fa-droplet'], 'Humidity', weatherInfo.humidity)
    const feelsLike = addGrid(['fa-solid', 'fa-temperature-low'], 'Feels Like', `${weatherInfo.feelsLike}°`)
    return extrasContainer.appendChildren(
      windGrid,
      Humidity,
      feelsLike,
    )
  }

  // Dom creation functions

  function createSearchBar() {
    const searchContainer = createClassElement('div', 'search-container')
    const searchInput = document.createElement('input')
    searchInput.setAttributes({
      'type': 'text',
      'name': 'location-search',
      'id': 'location-search',
      'minLength': 3,
    })
    const searchButton = createClassElement('a', 'fa-solid', 'fa-magnifying-glass-location')
    const unitButton = createTextElement('button', 'Metric')
    return searchContainer.appendChildren(searchInput, searchButton, unitButton)
  }

  function createCurrentForecast() {
    const topForecast = createClassElement('div', 'current-forecast-container')

    const headlineDetails = createClassElement('div', 'today-headlines')
    headlineDetails.appendChild(createCurrentHeadlines())

    const extraDetails = createClassElement('div', 'today-extras')
    extraDetails.appendChild(createCurrentExtras())

    return topForecast.appendChildren(
      headlineDetails,
      extraDetails)
  }

  function createDailyForecast() {
    const createDailyCard = () => {
      const card = createClassElement('div', 'card')
      const dailyDate = createClassElement('p', 'daily-date')
      const dailyTemp = createClassElement('h1', 'daily-temp')
      const dailyWeather = createClassElement('p', 'daily-weather')
      const dailyIcon = createClassElement('div', 'daily-icon')

      return card.appendChildren(
        dailyDate,
        dailyTemp,
        dailyWeather,
        dailyIcon
      )
    }

    const dailyForecast = createClassElement('div', 'daily-forecast-container')
    const dailyStack = createClassElement('div', 'card-stack')
    for (let i = 0; i < 4; i += 1) {
      const card = createDailyCard()
      dailyStack.appendChild(card)
    }
    return dailyForecast.appendChildren(dailyStack)
  }

  function createForecastContainer() {
    const forecastContainer = createClassElement('div', 'forecast-container')
    return forecastContainer.appendChildren(
      createCurrentForecast(),
      createDailyForecast()
    )
  }

  function createMainLayout() {
    const main = document.createElement('main')
    return main.appendChildren(
      createSearchBar(),
      createForecastContainer(),
    )
  }

  function createLoading() {
    const background = createClassElement('div', 'loading-background')
    const loadingIcon = createClassElement('i', 'fa-solid', 'fa-circle-notch')
    return background.appendChildren(loadingIcon)
  }

  // Info update functions

  function updateCurrentForecast(location, country, time, currentWeatherInfo) {
    const updateHeadlines = () => {
      const headlineHeadings = document.querySelectorAll('.current-headlines >  h1')
      headlineHeadings[0].textContent = location
      headlineHeadings[1].textContent = currentWeatherInfo.weather.weatherType
      headlineHeadings[2].textContent = `${currentWeatherInfo.temp}°`

      const headlineParas = document.querySelectorAll('.current-headlines > p')
      headlineParas[0].textContent = `${currentWeatherInfo.date}` // date
      headlineParas[1].textContent = time // time
      headlineParas[2].textContent = country   // weather
    }

    const updateExtras = () => {
      const allDataCells = document.querySelectorAll('.extras-grid .extras-data')
      allDataCells[0].textContent = `${currentWeatherInfo.windSpeed}mph` // wind speed
      allDataCells[1].textContent = `${currentWeatherInfo.humidity}°` // humidity
      allDataCells[2].textContent = `${currentWeatherInfo.feelsLike}°` // feels like
    }

    updateHeadlines()
    updateExtras()
  }

  function updateDailyForecast(dailyWeatherArr) {
    console.log(dailyWeatherArr)
    const allCards = document.querySelectorAll('.card')
    let i = 0
    dailyWeatherArr.forEach((weatherArr )=> {
      console.log(weatherArr)
      console.log(allCards[i])
      allCards[i].querySelector('.daily-date').textContent = `${weatherArr.day} ${weatherArr.date}`
      allCards[i].querySelector('.daily-temp').textContent = `${weatherArr.temp}°`
      allCards[i].querySelector('.daily-weather').textContent = weatherArr.weather.weatherType
      if (allCards[i].querySelector('.daily-icon i')) allCards[i].querySelector('.daily-icon i').remove()
      const weatherIcon = createClassElement('i', 'fa-solid', retrieveWeatherIcon(weatherArr.weather.weatherID))
      allCards[i].querySelector('.daily-icon').appendChild(weatherIcon) 
      i += 1
    })
  }

  // Return functions

  function createPage() {
    document.body.append(createMainLayout())
  }

  function updateForecast(newWeatherInfo) {
    updateCurrentForecast(newWeatherInfo.location, newWeatherInfo.country, newWeatherInfo.time, newWeatherInfo.forecast[0])
    updateDailyForecast(newWeatherInfo.forecast.slice(1))

  }

  function showLoading() {
    document.querySelector('main').appendChild(createLoading())
  }

  function removeLoading() {
    document.querySelector('.loading-background').remove()
  }

  return {
    createPage,
    updateForecast,
    showLoading,
    removeLoading,
  }

})()

export default domManager