const translateWeatherTitle = {
  Thunderstorm: 'Tempestade',
  Drizzle: 'Chuva fraca',
  Rain: 'Chuva',
  Snow: 'Neve',
  Atmosphere: 'Nublado',
  Clear: 'Sol',
  Clouds: 'Núvens'
}

export const formatWeather = value => {
  return translateWeatherTitle[value] ? translateWeatherTitle[value] : value
}
