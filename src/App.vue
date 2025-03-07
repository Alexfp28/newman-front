<script setup>
import { RouterView } from 'vue-router'
import AppBarDesktop from '/src/OnlyDesktop/VistaUsuario/AppBarDesktop.vue'
</script>

<template>
  <v-app>
    <AppBarDesktop />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
