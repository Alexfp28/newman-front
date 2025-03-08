<script setup>
import { RouterView } from 'vue-router'
import AppBarDesktop from '/src/OnlyDesktop/VistaUsuario/AppBarDesktop.vue'
const phoneSized = ["xs","sm","md"]
</script>

<template>
  <v-app>

    <AppBarDesktop v-if="!phoneSized.includes($vuetify.display.name)"/>
<!--    <AppBarMobile v-else/>-->

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
