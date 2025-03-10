<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    // Esto hay que cambiarlo por la informacion que nos llegara a traves de la llamada al back
    username: 'Administrador',
    items: [
      { title: 'Ver perfil', icon: 'mdi-account', link: '/profileSettings' },
      // Esto para el modo administracion
      // { title: 'Historial', icon: 'mdi-history', link: '/userHistory' },
    ],
  }),
}
</script>

<template>
  <div class="text-center">
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        location="end"
    >
      <template v-slot:activator="{ props }">
        <!-- Avatar -->
        <v-avatar
            color="info"
            size="large"
            image="/src/images/unknow_user.jpg"
            class="clickable-avatar"
            style="margin-right: 10px"
            v-bind="props"
        >
        </v-avatar>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item
              prepend-avatar="/src/images/unknow_user.jpg"
              :title="username"
          >
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="i"
          >
            <RouterLink :to="item.link" class="no-decoration">
              <v-list-item-title ><v-icon>{{ item.icon }}</v-icon> {{ item.title }}</v-list-item-title>
            </RouterLink>
          </v-list-item>
        </v-list>

        <RouterLink to="/login" class="no-decoration">
          <v-btn
              color="blue"
              variant="text"
              @click="menu = false"
          >
            Iniciar Sesion
          </v-btn>
        </RouterLink>

        <RouterLink to="/login" class="no-decoration">
          <v-btn
              color="red"
              variant="text"
              @click="menu = false"
          >
            Cerrar Sesion
          </v-btn>
        </RouterLink>

      </v-card>
    </v-menu>
  </div>
</template>

<style scoped>

.no-decoration {
  text-decoration: none;
  color: black;
}

.clickable-avatar {
  cursor: pointer;
  transition: transform 0.2s;
}

.clickable-avatar:hover {
  transform: scale(1.1);
}
</style>