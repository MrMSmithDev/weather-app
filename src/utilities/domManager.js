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

  function createNavElement() {
    const navElement = document.createElement('nav')
    const header = createHeaderElement()
    const locationSearch = createSearchInput()
    return appendChildren(navElement, header, locationSearch)
  }

  function showDashboard() {
    document.body.appendChild(createNavElement())
  }

  return {
    showDashboard
  }

})()

export default domManager