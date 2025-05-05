<script>
import {defineComponent, ref} from "vue";
import UserAvatarPreviewComponent from "@/OnlyDesktop/VistaUsuario/components/pages/UserAvatarPreviewComponent.vue";

export default defineComponent({
  components: {UserComponent: UserAvatarPreviewComponent},
  setup() {
    const drawer = ref(false);
    return {drawer};
  }
});
</script>

<template>
  <v-app-bar fixed color="black" elevated>
    <v-app-bar-nav-icon @click="drawer = !drawer" color="white"/>
    <v-spacer></v-spacer>
    <router-link to="/home">
      <img src="https://raw.githubusercontent.com/Alexfp28/newman-front/refs/heads/main/public/images/newmen_logo.jpg" alt="Logo" class="logoH px-5"/>
    </router-link>
    <v-spacer></v-spacer>
    <UserComponent/>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary app>
    <v-list>
      <v-list-item to="/home">
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>
      <v-list-item to="/appointment">
        <v-list-item-title>Calendario</v-list-item-title>
      </v-list-item>
      <v-list-item to="/catalog">
        <v-list-item-title>Catálogo</v-list-item-title>
      </v-list-item>
      <v-list-item to="/contact">
        <v-list-item-title>Contacto</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
</style>
