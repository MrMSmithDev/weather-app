import './styles/style.css'
import './assets/fontawesome-css/css/fontawesome.css'
import './assets/fontawesome-css/css/solid.css'
import dom from './utilities/domManager'
import api from './utilities/apiManager'


dom.createPage()
const input = document.querySelector('input')

function addModalListener() {
  const button = document.querySelector('.modal-background button')
  button.addEventListener('click', dom.removeModal)
}

async function showForecast(searchTerm) {
  searchTerm = input.value || searchTerm
  dom.showLoading()
  try {
    const weatherData = await api.makeLocationSearch(searchTerm)
    input.value = ''
    dom.updateForecast(weatherData, api.getCurrentUnits())
  } catch(err) {
    console.log(err)
    dom.showModal()
    addModalListener()
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
  unitButton.textContent = api.changeApiUnits().toUpperCase()
  showForecast(document.querySelector('.current-headlines h1').textContent)
})
