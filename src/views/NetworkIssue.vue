<template>
  <v-container fill-height>
    <v-layout align-center>
      <v-flex xs12>
        <v-card class="pa-4">
          <h1 class="display-3">Uh-Oh!</h1>
          <h3
            class="title"
          >Parece que você está experenciando problemas com conexão, por favor clique no botão de voltar e tente novamente.</h3>
          <router-link :to="{ name: 'home-page' }">
            <v-btn color="info" class="ma-0 mt-4">Ou volte para a home page</v-btn>
          </router-link>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
