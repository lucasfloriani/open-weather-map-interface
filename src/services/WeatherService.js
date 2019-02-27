import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/forecast?lang=pt`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getWeatherByCityName(name) {
    return apiClient.get(
      `&units=metric&q=${name},BR&APPID=${process.env.VUE_APP_APIKEY}`
    )
  }
}
