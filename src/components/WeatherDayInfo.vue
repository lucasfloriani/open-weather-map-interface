<template>
  <v-flex xl3 lg4 md6 sm6 xs12 grow text-xs-center>
    <v-card justify-center color="green lighten-4">
      <div class="pa-2 green lighten-2">
        <v-avatar size="40px" color="grey darken-3">
          <v-img class="elevation-6" :src="weather.icon"></v-img>
        </v-avatar>
        <span class="ml-3 title">{{ weather.status | formatWeather }}</span>
      </div>
      <div class="pa-2">
        <p class="subheading mb-2">Horário: {{weather.time | formatTime }}</p>
        <p class="mb-0">{{ `Min: ${weather.temperature.min} °C` }}</p>
        <p class="mb-0">{{ `Max: ${weather.temperature.max} °C` }}</p>
      </div>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      required: true
    }
  }
}
</script>
