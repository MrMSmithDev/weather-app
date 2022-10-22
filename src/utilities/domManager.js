/* eslint-disable no-unused-vars */
const domManager = (() => {
  const imageLibrary = {
    clouds: 'assets/images/cloud.jpg',
    fog: 'assets/images/fog.jpeg',
    rain: 'assets/images/rain.jpeg',
    snow: 'assets/images/snow.jpg',
    sunny: 'assets/images/sunny.jpeg',
    storm: 'assets/images/storm.jpeg',
  }

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

  function retrieveWeatherImage(weatherID) {
    if (weatherID.match(/^800/)) return imageLibrary.sunny
    if (weatherID.match(/^8/)) return imageLibrary.clouds
    if (weatherID.match(/^(3|5)/)) return imageLibrary.rain
    if (weatherID.match(/^2/)) return imageLibrary.storm
    if (weatherID.match(/^6/)) return imageLibrary.snow
    return imageLibrary.fog
  }

  // Information div creation

  const weatherInfo = {
    name: 'Bristol',
    day: 'Tuesday',
    date: '24 Oct',
    weather: 'cloudy',
    temp: 22,
    feelsLike: 23,
    windSpeed: 14,
  }

  function updateCurrentHeadlines() {
    const headlinesContainer = createClassElement('div', 'headlines-container')

    const dateHeadline = createTextElement('p', `${weatherInfo.day} ${weatherInfo.date}`)
    const locationHeadline = createTextElement('h1', weatherInfo.name)
    const weatherHeadline = createTextElement('p', weatherInfo.weather)
    const tempHeadline = createTextElement('h1', `${weatherInfo.temp}`)
    
    return headlinesContainer.appendChildren(
      dateHeadline,
      locationHeadline,
      weatherHeadline,
      tempHeadline,
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
    const searchButton = createTextElement('button', 'Search')
    return searchContainer.appendChildren(searchInput, searchButton)
  }

  function createCurrentForecast() {
    const topForecast = createClassElement('div', 'top-forecast-container')

    const headlineDetails = createClassElement('div', 'today-headlines')
    const currentHeadlines = createClassElement('div', 'current-headlines')
    console.log(currentHeadlines)
    currentHeadlines.appendChild(updateCurrentHeadlines())
    const extraDetails = createClassElement('div', 'today-extras')
    return topForecast.appendChildren(
      headlineDetails,
      currentHeadlines,
      extraDetails)
  }

  function createFutureForecast() {
    // Continue Here
  }

  function createMainLayout() {
    const main = document.createElement('main')
    return main.appendChildren(
      createSearchBar(),
      createCurrentForecast(),
    )
  }

  // Return functions

  function showPage() {
    document.body.append(createMainLayout())
  }

  return {
    showPage
  }

})()

export default domManager