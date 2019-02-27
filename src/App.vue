<template>
  <div id="app">
    <v-app>
      <NotificationContainer/>
      <v-content>
        <router-view :key="$route.fullPath"/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
    NotificationContainer
  }
}
</script>

<style>
body .application.theme--light {
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
}
a {
  text-decoration: none;
}
.overflow-y-auto {
  overflow-y: auto;
}
.tab-item-wrapper {
  height: 80vh;
}
</style>
