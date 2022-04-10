


class UI {

  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.temperature = document.getElementById('w-temperature');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.minMaxTemp = document.getElementById('w-min-max-temp');
    this.wind = document.getElementById('w-wind');
    this.selectedCity;
    this.selectedCountry ;
  }


  clearInputField() {
    document.getElementById('city').value = '';
  }

  changeCity(city, country) {
    this.selectedCity = city;
    this.selectedCountry = country;
  }

  clearSearchUI() {
    document.querySelector('.city-country').innerHTML = '';
    document.querySelector('.show-country').style.display = 'none';
  }

  showSearchUI(data) {
    document.querySelector('.show-country').style.display = 'block';
      let html = '';
      data.forEach(element => {
        html += `
            <li class="list-group-item modal-li ${element.name}-${element.country}">${element.name}, ${element.country}</li>
        `
      });
      document.querySelector('.city-country').innerHTML = html;
      
  }

  showDataUI(data) {
    console.log(data);
    let direction;
    switch(true){
      case (data.wind.deg >= 0 && data.wind.deg <= 15):
        direction = 'N'; 
        break;
      case (data.wind.deg > 15 && data.wind.deg < 75):
        direction = 'NE'; 
        break;
      case (data.wind.deg >= 75 && data.wind.deg <= 105):
        direction = 'E'; 
        break;
      case (data.wind.deg > 105 && data.wind.deg < 165):
        direction = 'SE'; 
        break;
      case (data.wind.deg >= 165 && data.wind.deg <= 195):
        direction = 'S'; 
        break;
      case (data.wind.deg > 195 && data.wind.deg < 255):
        direction = 'SW'; 
        break;
      case (data.wind.deg >= 255 && data.wind.deg <= 285):
        direction = 'W'; 
        break;
      case (data.wind.deg > 285 && data.wind.deg < 345):
        direction = 'NW'; 
        break;
      case (data.wind.deg >= 345 && data.wind.deg <= 359):
        direction = 'N'; 
        break;
    }
    
    this.location.innerHTML = `${this.selectedCity}, ${this.selectedCountry}`;
    this.description.innerHTML = data.weather[0].description;
    this.temperature.innerHTML = `${Math.round(data.main.temp)} &deg; C / (${Math.round((Math.round(data.main.temp) * 1.8) + 32)} F)`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    this.humidity.innerHTML = `Relative Humidity:    ${data.main.humidity}%`;
    this.feelsLike.innerHTML = `Feels like: ${Math.round(data.main.feels_like)} &deg; C / (${Math.round((Math.round(data.main.feels_like) * 1.8) + 32)} F)`;
    this.minMaxTemp.innerHTML = `Min Temp: ${Math.round(data.main.temp_min)} &deg; C <br> Max Temp: ${Math.round(data.main.temp_max)} &deg; C`;
    this.wind.innerHTML = `Wind speed: ${Math.round(data.wind.speed * 18 / 5)} KM/H <br> Wind Direction: ${direction}`;
    
  }

}



