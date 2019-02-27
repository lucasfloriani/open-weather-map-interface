<template>
  <v-container fill-height>
    <v-layout wrap align-center>
      <v-flex xs12>
        <h1 class="display-3">Open Weather Map</h1>
        <p class="subheading">Digite a cidade que deseja saber o tempo</p>
        <Search class="mb-3"/>
      </v-flex>
      <v-flex xs12 v-if="city">
        <WeatherCardList :city="city" :weathers="weathers"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Search from '@/components/Search.vue'
import WeatherCardList from '@/components/WeatherCardList.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Search,
    WeatherCardList
  },
  computed: mapState('weather', ['city', 'weathers'])
}
</script>
