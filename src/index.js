import './styles/style.css'
import api from './utilities/apiManager'
import dom from './utilities/domManager'

dom.initHome()

const navSearchBar = document.querySelector('.nav-location-input')
const navSearchButton = document.querySelector('nav .search-button')
navSearchButton.addEventListener('click', () => {
  const weatherData = api.makeLocationSearch(navSearchBar.value)
  console.log(weatherData)
})

const startupSearchBar = document.querySelector('.startup-image input')
const startupSearchButton = document.querySelector('.startup-image button')
startupSearchButton.addEventListener('click', () => {
  const weatherData = api.makeLocationSearch(startupSearchBar.value)
  console.log(weatherData)
})

const unitButton = document.querySelector('.unit-button')
unitButton.addEventListener('click', () => {
  const newUnits = api.changeApiUnits()
  dom.updateUnitText(newUnits)
})