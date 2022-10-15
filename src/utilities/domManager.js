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

})()

export default domManager