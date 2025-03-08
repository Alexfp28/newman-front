<script setup>
const handleAvatarClick = () => {
  alert("Avatar clickeado!");
};
</script>

<template>
  <v-app-bar fixed class="app-bar" color="black" elevated>

    <img src="/src/images/newmen_logo.png" alt="" class="logoH px-5">

    <!--HomeView-->
    <RouterLink to="/home">
      <v-btn class="font-weight-bold" to="/home" color="white">
        Inicio
      </v-btn>
    </RouterLink>

    <!--ScheduleView-->
<!--    <RouterLink to="/schedule">-->
<!--      <v-btn class="font-weight-bold" to="/schedule" color="white">-->
<!--        Horarios-->
<!--      </v-btn>-->
<!--    </RouterLink>-->

    <!--AppointmentView-->
    <RouterLink to="/appointment">
      <v-btn class="font-weight-bold" to="/appointment" color="white">
        Calendario
      </v-btn>
    </RouterLink>

    <!--CatalogView-->
    <RouterLink to="/catalog">
      <v-btn class="font-weight-bold" to="/catalog" color="white">
        Catálogo
      </v-btn>
    </RouterLink>

    <!--ContactView-->
    <RouterLink to="/contact">
      <v-btn class="font-weight-bold" to="/contact" color="white">
        Contacto
      </v-btn>
    </RouterLink>

    <v-spacer></v-spacer>

    <!-- Avatar -->
    <v-avatar
        color="info"
        size="large"
        image="/src/images/unknow_user.jpg"
        @click="handleAvatarClick"
        class="clickable-avatar"
        style="margin-right: 10px"
    >
    </v-avatar>


  </v-app-bar>
</template>

<style>

.clickable-avatar {
  cursor: pointer;
  transition: transform 0.2s;
}

.clickable-avatar:hover {
  transform: scale(1.1);
}

</style>