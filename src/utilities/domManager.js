/* eslint-disable no-unused-vars */
const domManager = (() => {
  const imageLibrary = {
    sunny: '../assets/images/sunny.jpeg',
    clouds: '../assets/images/cloud.jpg',
    rain: '../assets/images/rain.jpeg',
    storm: '../assets/images/storm.jpeg',
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
    locationInput.setAttributes({
      'type': 'text',
      'name': 'location-input',
      'id': 'location-input',
      'placeholder': 'City, Town or Village',
      'minLength': 2,
      'maxLength': 100,
      'required': ''
    })
    label.appendChild(locationInput)
    const searchButton = createTextElement('button', 'search')
    fieldset.appendChildren(label, searchButton)
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

    return forecastImage.appendChildren(
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
        cardImage.appendChildren(card,
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
    return navElement.appendChildren(header, locationSearch)
  }

  function createStartupPage() {
    const startupContainer = createClassElement('div', 'startup-container')
    const startupImage = createClassElement('img', 'startup-image')
    const startupHeader = createTextElement('h1', 'Whatever\'s the Weather')
    const startupPara = createTextElement('p', '')
    return startupContainer.appendChildren(startupImage, startupHeader, startupPara)
  }

  function createForecastContainer(weatherInfo) {
    const forecastContainer = createClassElement('div', 'forecast-container')
    return forecastContainer.appendChildren(
      createMainForecast(weatherInfo), // Pass in weather info for current day (Separated ))
      createCardDeck(weatherInfo), // Pass in weather info object for days 2 - 7
    )
  }

  function showDashboard() {
    layoutWrapper.appendChild(createNavElement())
    layoutWrapper.appendChild(createMainElement())
  }

  function showStartupMain() {
    let main = document.querySelector('main')
    if (!main) {
      main = document.createElement('main')
      layoutWrapper.appendChild(main)
    }
    main.appendChild(createStartupPage())
  }

  // Return functions

  function initHome() {
    showDashboard()
    showStartupMain()
  }

  function showCurrentForecast(weatherInfo) {
    let main = document.querySelector('main')
    if (!main) {
      main = document.createElement('main')
      layoutWrapper.appendChild(main)
    }
    main.appendChild(createForecastContainer(weatherInfo)) // !! Pass in weather information here !!
  }

  function updateUnitText(newUnits) {
    const unitButtons = document.querySelectorAll('.unit-button')
    unitButtons.forEach(button => {
      button.textContent = newUnits
    })
  }

  function removeMain() {
    document.querySelector('main').remove()
  }

  return {
    initHome,
    showCurrentForecast,
    updateUnitText,
    removeMain,
  }

})()

export default domManager