import './styles/style.css'
import './assets/fontawesome-css/css/solid.css'
import dom from './utilities/domManager'

// async function showForecast(inputBar) {
//   dom.removeMain()
//   dom.showLoading()
//   try {
//     const weatherData = await api.makeLocationSearch(inputBar.value)
//     dom.removeMain()
//     dom.showCurrentForecast(weatherData, api.getCurrentUnits())
//   } catch(err) {
//     dom.removeMain()
//     dom.showErrorModal()
//   }
// }

dom.showPage()

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
