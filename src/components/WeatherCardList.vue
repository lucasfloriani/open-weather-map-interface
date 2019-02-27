<template>
  <div>
    <v-card color="cyan darken-2" class="white--text">
      <v-card-title primary-title>
        <h2 class="headline">{{ city }}</h2>
      </v-card-title>
    </v-card>

    <v-container class="pa-0 cyan darken-2">
      <v-layout wrap row>
        <v-flex xs12>
          <v-container class="pa-2" grid-list-md>
            <v-layout wrap justify-center>
              <v-flex xs12 md6 grow v-for="(weather, date) in weathers" :key="date">
                <v-card class="mb-1 fill-height">
                  <v-card-title>
                    <h4 class="headline">{{ date | formatDate }}</h4>
                  </v-card-title>
                  <v-divider light></v-divider>
                  <v-card-actions>
                    <v-container>
                      <v-layout wrap justify-center>
                        <WeatherDayInfo v-for="(item, id) in weather" :key="id" :weather="item"/>
                      </v-layout>
                    </v-container>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import WeatherDayInfo from '@/components/WeatherDayInfo.vue'

export default {
  props: {
    city: {
      type: String,
      required: true
    },
    weathers: {
      type: Object,
      required: true
    }
  },
  components: {
    WeatherDayInfo
  }
}
</script>
