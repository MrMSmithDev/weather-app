import './styles/style.css'
import './assets/fontawesome-css/css/fontawesome.css'
import './assets/fontawesome-css/css/solid.css'
import dom from './utilities/domManager'
import api from './utilities/apiManager'


dom.createPage()
const input = document.querySelector('input')

async function showForecast(searchTerm) {
  searchTerm = input.value || searchTerm
  dom.showLoading()
  try {
    const weatherData = await api.makeLocationSearch(searchTerm)
    input.value = ''
    dom.updateForecast(weatherData)
  } catch(err) {
    console.log(err)
    // dom.showErrorModal()
  }
  finally {
    dom.removeLoading()
  }
}

showForecast('London')

const searchButton = document.querySelector('.search-container a')
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    showForecast()
  }
})
searchButton.addEventListener('click', showForecast)

const unitButton = document.querySelector('.unit-container button')
unitButton.addEventListener('click', () => {
  api.changeApiUnits()
  showForecast(document.querySelector('.current-headlines h1').textContent)
})

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
