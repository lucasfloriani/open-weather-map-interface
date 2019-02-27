import Vue from 'vue'
import Vuex from 'vuex'
import * as weather from '@/store/modules/weather.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notification,
    weather
  }
})
