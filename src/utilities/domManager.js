/* eslint-disable no-unused-vars */
const domManager = (() => {

  function createClassElement(element, ...classes) {
    const newElement = document.createElement(element)
    classes.forEach((className) => newElement.classList.add(className))
    return newElement
  }

  function createClassText(element, text) {
    const newElement = document.createElement(element)
    newElement.textContent = text
  }

  function appendChildren(mainElement, ...elementsToAppend) {
    elementsToAppend.forEach((element) => mainElement.appendChild(element))
  }

  function setAttributes(mainElement, attributeObject) {
    Object.keys(attributeObject).forEach()
  }

  function createHeaderElement() {
    const header = document.createElement('header')
    const logo = createClassText('h1', 'Whatever the Weather')
    return header.appendChild(logo)
  }

  function createSearchInput() {
    const formElement = document.createElement('form')
    const fieldset = document.createElement('fieldset')

    const label = document.createElement('label')
    label.setAttribute('for', 'location-input')
    const locationInput = document.createElement('input')

  }

  function createNavElement() {
    const navElement = document.createElement('nav')
    const header = createHeaderElement()

  }

})()

export default domManager