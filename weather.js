class City {
  constructor(city) {
    this.apiKey = '44c84272af3bcf9ec72717da4289f2eb'
    this.city = city
    this.responseLimit = 5
  }

  // Fetch country from api

  async getCity() {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=${this.responseLimit}&appid=${this.apiKey}`
    )

    const responseData = await response.json()

    console.log(responseData)

    return responseData
  }

  changeCity(city) {
    this.city = city
  }
}

class Weather {
  constructor(lat, lon) {
    this.apiKey = '44c84272af3bcf9ec72717da4289f2eb'
    this.lat = lat
    this.lon = lon
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}&units=metric`
    )

    const responseData = await response.json()

    console.log(responseData)
    return responseData
  }

  changeCity(lat, lon) {
    this.lat = lat
    this.lon = lon
  }
}
