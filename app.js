const city = new City(`London`);
const ui = new UI;
const weather = new Weather;



if(localStorage.getItem('lat') !== null && localStorage.getItem('lon') !== null && localStorage.getItem('city') !== null && localStorage.getItem('country') !== null) {
  const lat = localStorage.getItem('lat');
  const lon = localStorage.getItem('lon');
  const city = localStorage.getItem('city');
  const country = localStorage.getItem('country');

  ui.clearSearchUI();
  ui.changeCity(city, country)
  
  weather.changeCity(lat,lon);
  weather.getWeather().then(data =>{
    ui.showDataUI(data)
  });

  searchUI();
  searchWeather(); 

}else{
  // displaying the initial search ui
  searchUI() 

  searchWeather();



}

function searchUI() {
  document.getElementById('city').addEventListener('keyup', (typedCity) => {
    if(typedCity.target.value !== ''){
      console.log(typedCity.target.value);
      city.changeCity(typedCity.target.value);
      city.getCity().then(data => {
        ui.showSearchUI(data);
      });
    } else {
      ui.clearSearchUI();
    }

  })
}s


function searchWeather() {
  document.querySelector('.city-country').addEventListener('click', (e) => {
    ui.clearInputField();
    const cityCountry = e.target.className.slice(25).split('-');
    const cityStr = cityCountry[0];
    const countryStr = cityCountry[1];
    
    ui.clearSearchUI();
    
    

    // console.log(ui.selectedCity);
    
    city.getCity().then(data => {
      data.forEach(element => {
        if(element.name === cityStr && element.country === countryStr){
          console.log(element);
          localStorage.setItem('city', element.name);
          localStorage.setItem('country', element.country);
          localStorage.setItem('lat', element.lat);
          localStorage.setItem('lon', element.lon);

          city.changeCity(cityStr);
          ui.changeCity(cityStr, countryStr);
          
          weather.changeCity(element.lat, element.lon);
          weather.getWeather().then(data => {
            ui.showDataUI(data);
          })
      }
      });
    })
  })
} 