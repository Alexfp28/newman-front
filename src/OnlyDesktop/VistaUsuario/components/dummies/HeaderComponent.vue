<script>
import ScheduleComponent from '@/OnlyDesktop/VistaUsuario/components/dummies/ScheduleComponent.vue'
import AppointmentComponent from '@/OnlyDesktop/VistaUsuario/components/pages/AppointmentComponent.vue'
import CatalogComponent from '@/OnlyDesktop/VistaUsuario/components/pages/CatalogComponent.vue'
import HomeComponent from "@/OnlyDesktop/VistaUsuario/components/pages/HomeComponent.vue";

export default {
  data() {
    return {
      tab: 'Inicio',
      items: [
        { name: 'Inicio', component: HomeComponent },
        { name: 'Horario', component: ScheduleComponent },
        { name: 'Pedir Cita', component: AppointmentComponent },
        { name: 'Catálogo', component: CatalogComponent },
      ],
    };
  },
};
</script>

<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-title">
        NewMen
      </h1>
    </v-card-title>

    <v-tabs
        v-model="tab"
        bg-color="transparent"
        color="basil"
        grow
    >
      <v-tab
          v-for="item in items"
          :key="item.name"
          :text="item.name"
          :value="item.name"
          class="text-newmen"
      ></v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
          style="height: 83vh"
          v-for="item in items"
          :key="item.name"
          :value="item.name"
      >
        <v-card color="basil" flat>
          <v-card-text class="text-newmen">
            <component :is="item.component"/>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<style>
/* Helper classes */
.bg-basil {
  background-color: #213555 !important;
}

.text-newmen {
  color: #ffffff !important;
}

.text-title {
  font-family: 'Inter', sans-serif;
  color: #3AAEF5 !important;
}
</style>
