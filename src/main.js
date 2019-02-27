import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import pt from 'vuetify/es5/locale/pt'
import { formatDate, formatTime } from './filters/date.js'
import { formatWeather } from './filters/weather.js'

Vue.filter('formatDate', formatDate)
Vue.filter('formatTime', formatTime)
Vue.filter('formatWeather', formatWeather)
Vue.use(Vuetify)
Vue.use(Vuelidate, {
  lang: {
    locales: { pt },
    current: 'pt'
  }
})

Vue.config.productionTip = false

// Automatic add Base components to global Vue
// that could be add in the future.
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
