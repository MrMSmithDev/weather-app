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

  function appendChildren(mainElement, ...elementsToAppend) {
    elementsToAppend.forEach((element) => mainElement.appendChild(element))
    return mainElement
  }

  function setAttributes(mainElement, attributeObject) {
    Object.keys(attributeObject).forEach((key) => mainElement.setAttribute(key, attributeObject[key]))
  }

  // Dom creation functions

  const layoutWrapper = createClassElement('div', 'layout-wrapper')
  document.body.appendChild(layoutWrapper)

  function createHeaderElement() {
    const header = document.createElement('header')
    const logo = createTextElement('h1', 'Whatever the Weather')
    return header.appendChild(logo)
  }

  function createSearchInput() {
    const formElement = document.createElement('form')
    const fieldset = document.createElement('fieldset')

    const label = document.createElement('label')
    label.setAttribute('for', 'location-input')
    const locationInput = document.createElement('input')
    setAttributes(locationInput, {
      'type': 'text',
      'name': 'location-input',
      'id': 'location-input',
      'placeholder': 'City, Town or Village'
    })
    label.appendChild(locationInput)
    const searchButton = createTextElement('button', 'search')
    appendChildren(fieldset, label, searchButton)
    formElement.appendChild(fieldset)
    return formElement
  }

  // Update following function with suitable object access notation
  function createMainForecast(weather, temperature, location) {
    const wrapperDiv = createClassElement('div', 'current-forecast-container')

    const forecastImage = createClassElement('div', 'current-forecast-image')
    const paraLocation = createClassElement('p', 'para-location')
    paraLocation.textContent = location
    const paraWeather = createClassElement('p', 'para-weather')
    paraWeather.textContent = weather
    const paraTemperature = createClassElement('p', 'para-temp')
    paraTemperature.textContent = temperature

    return appendChildren(
      forecastImage,
      wrapperDiv,
      paraLocation,
      paraWeather,
      paraTemperature)
  }

  // Update following function with suitable object access notation
  function createCardDeck(weather) {
    const createForecastCard = (weatherInfo, containerElement) => {
      weatherInfo.forEach((day) => {
        const card = createClassElement('div', 'card')
        const cardImage = document.createElement('img')
        const paraWeather = createClassElement('p', 'para-weather')
        paraWeather.textContent = day.weatherType
        const paraTemperature = createClassElement('p', 'para-temperature')
        paraTemperature.textContent = day.temperature
        appendChildren(card,
          cardImage,
          paraWeather,
          paraTemperature,
        )
        containerElement.appendChild(card)
      })
    }

    const cardStack = createClassElement('div', 'card-stack')
    createCardDeck(weather, cardStack)
    return cardStack
  }

  function createMainElement() {
    return document.createElement('main')
  }

  function createNavElement() {
    const navElement = document.createElement('nav')
    const header = createHeaderElement()
    const locationSearch = createSearchInput()
    return appendChildren(navElement, header, locationSearch)
  }

  function createForecastContainer(weatherInfo) {
    const forecastContainer = createClassElement('div', 'forecast-container')
    return appendChildren(forecastContainer,
      createMainForecast(weatherInfo), // Pass in weather info for current day (Separated ))
      createCardDeck(weatherInfo), // Pass in weather info object for days 2 - 7
    )
  }

  // Return functions

  function showDashboard() {
    layoutWrapper.appendChild(createNavElement())
    layoutWrapper.appendChild(createMainElement())
  }

  function showCurrentForecast(weatherInfo) {
    let main = document.querySelector('main')
    if (!main) {
      main = document.createElement('main')
      layoutWrapper.appendChild(main)
    }
    main.appendChild(createForecastContainer(weatherInfo)) // !! Pass in weather information here !!
  }

  function removeMain() {
    document.querySelector('main').remove()
  }

  return {
    showDashboard,
    showCurrentForecast,
    removeMain,
  }

})()

export default domManager