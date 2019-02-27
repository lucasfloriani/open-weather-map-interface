<template>
  <v-card color="blue lighten-5">
    <form @submit.prevent="createEvent">
      <v-container>
        <v-layout>
          <v-flex xs12>
            <v-text-field
              v-model="cityName"
              label="Nome da cidade"
              required
              :error-messages="cityNameErrors"
              @blur="$v.cityName.$touch()"
            ></v-text-field>
          </v-flex>
          <v-flex p>
            <v-btn color="green lighten-2" type="submit">Buscar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </form>
  </v-card>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import NProgress from 'nprogress'

export default {
  data: () => ({
    cityName: ''
  }),
  validations: {
    cityName: { required }
  },
  methods: {
    createEvent() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        NProgress.start()
        this.$store
          .dispatch('weather/fetchWeathers', this.cityName)
          .finally(() => {
            NProgress.done()
          })
      }
    }
  },
  computed: {
    cityNameErrors() {
      const errors = []
      if (!this.$v.cityName.$dirty) return errors
      !this.$v.cityName.required && errors.push('Nome da cidade é obrigatório.')
      return errors
    }
  }
}
</script>
