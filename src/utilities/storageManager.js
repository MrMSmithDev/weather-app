const storageManager = (() => {
  let homeLocation = localStorage.getItem('home-location')
  if (!homeLocation) homeLocation = 'London'
    
  function getHome() {
    return homeLocation
  }

  function setHome(currentLocation) {
    homeLocation = currentLocation
    localStorage.setItem('home-location',  currentLocation)
  }

  return {
    getHome,
    setHome,
  }

})()

export default storageManager