import WeatherService from '@/services/WeatherService.js'
import uuidv4 from 'uuid/v4'
import { DateTime } from 'luxon'

export const namespaced = true

export const state = {
  city: '',
  weathers: {},
  history: []
}

export const mutations = {
  SET_WEATHER_CITY(state, name) {
    state.city = name
  },
  SET_WEATHERS(state, weathers) {
    state.weathers = weathers
  },
  SET_HISTORY(state, name) {
    state.history.push({
      id: uuidv4(),
      name,
      bookmark: false
    })
  }
}

export const actions = {
  fetchWeathers({ commit, dispatch }, name) {
    return WeatherService.getWeatherByCityName(name)
      .then(response => {
        const weatherList = response.data.list.reduce((obj, item) => {
          const key = DateTime.fromSeconds(item.dt).toFormat('yyyy-MM-dd')
          const weather = {
            id: uuidv4(),
            humidity: item.main.humidity,
            icon: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
            status: item.weather[0].main,
            temperature: {
              min: item.main.temp_min,
              max: item.main.temp_max
            },
            time: item.dt_txt
          }

          obj[key] = obj[key] ? [...obj[key], weather] : [weather]
          return obj
        }, {})

        commit('SET_WEATHER_CITY', response.data.city.name)
        commit('SET_WEATHERS', weatherList)
        commit('SET_HISTORY', response.data.city.name)
      })
      .catch(error => {
        console.error(`Erro ao buscar temperatura da cidade ${name}`, error)
        const notification = {
          type: 'error',
          message: `Ocorreu um problema ao buscar a temperatura da cidade ${name}, tente novamente mais tarde`
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  setHistory({ commit }, name) {
    commit('SET_HISTORY', name)
  }
}
