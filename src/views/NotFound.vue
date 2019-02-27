<template>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex xs12>
        <v-card class="pa-4">
          <h1 class="display-3">Oops!</h1>
          <h3 class="title">O que você estava procurando não é aqui.</h3>
          <router-link :to="{ name: 'home-page' }">
            <v-btn color="info" class="ma-0 mt-4">Voltar para home page</v-btn>
          </router-link>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
