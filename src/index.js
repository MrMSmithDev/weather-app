import './styles/style.css'
import './assets/fontawesome-css/css/fontawesome.css'
import './assets/fontawesome-css/css/solid.css'
import dom from './utilities/domManager'
import api from './utilities/apiManager'


dom.showPage()
const input = document.querySelector('input')

async function showForecast() {
  try {
    const weatherData = await api.makeLocationSearch(input.value)
    console.log(weatherData)
    // dom.removeMain()
    // dom.showCurrentForecast(weatherData, api.getCurrentUnits())
  } catch(err) {
    console.log(err)
    // dom.removeMain()
    // dom.showErrorModal()
  }
}

const searchButton = document.querySelector('.search-container a')
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    showForecast()
  }
})
searchButton.addEventListener('click', showForecast)

// const searchBar = document.querySelector('#nav-location-input')
// const navSearchButton = document.querySelector('nav .search-button')
// navSearchButton.addEventListener('click', () => {
//   showForecast(searchBar)
// })

// const unitButton = document.querySelector('.unit-button')
// unitButton.addEventListener('click', () => {
//   const newUnits = api.changeApiUnits()
//   dom.updateUnitText(newUnits)
// })
