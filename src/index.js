import './styles/style.css'
import api from './utilities/apiManager'
import dom from './utilities/domManager'

async function showForecast(inputBar) {
  dom.removeMain()
  dom.showLoading()
  const weatherData = await api.makeLocationSearch(inputBar.value)
  dom.removeMain()
  dom.showCurrentForecast(weatherData, api.getCurrentUnits())
}

dom.initHome()

const navSearchBar = document.querySelector('#nav-location-input')
const navSearchButton = document.querySelector('nav .search-button')
navSearchButton.addEventListener('click', () => {
  showForecast(navSearchBar)
})

const startupSearchBar = document.querySelector('#startup-location-input')
const startupSearchButton = document.querySelector('.startup-container .search-button')
startupSearchButton.addEventListener('click', () => {
  showForecast(startupSearchBar)
})

const unitButton = document.querySelector('.unit-button')
unitButton.addEventListener('click', () => {
  const newUnits = api.changeApiUnits()
  dom.updateUnitText(newUnits)
})
