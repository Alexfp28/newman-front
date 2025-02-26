<script>
import HomeComponent from "@/OnlyDesktop/VistaUsuario/components/pages/HomeComponent.vue";
import ScheduleComponent from "@/OnlyDesktop/VistaUsuario/components/pages/ScheduleComponent.vue";
import AppointmentComponent from "@/OnlyDesktop/VistaUsuario/components/pages/AppointmentComponent.vue";
import CatalogComponent from "@/OnlyDesktop/VistaUsuario/components/pages/CatalogComponent.vue";
import ContactComponent from "@/OnlyDesktop/VistaUsuario/components/pages/ContactComponent.vue";

export default {
  components: {ContactComponent, AppointmentComponent, ScheduleComponent, HomeComponent, CatalogComponent},
  data: () => ({
    tab: 'Inicio',
    items: [
      { name: 'Inicio', component: HomeComponent },
      { name: 'Horario', component: ScheduleComponent },
      { name: 'Pedir Cita', component: AppointmentComponent },
      { name: 'Catálogo', component: CatalogComponent },
    ],
  }),
}
</script>

<template class="flex justify-center">
  <v-card>
    <v-tabs
        v-model="tab"
        bg-color="primary"
        align-tabs="center"
    >
      <v-tab value="one">Inicio</v-tab>
      <v-tab value="two">Horario</v-tab>
      <v-tab value="three">Pedir Cita</v-tab>
      <v-tab value="fourth">Catálogo</v-tab>
      <v-tab value="fifth">Contacto</v-tab>
    </v-tabs>

    <v-card-text class="justify-center">
      <v-tabs-window v-model="tab" class="justify-center">
        <v-tabs-window-item value="one">
          <HomeComponent/>
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          <ScheduleComponent/>
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          <AppointmentComponent/>
        </v-tabs-window-item>

        <v-tabs-window-item value="fourth">
          <CatalogComponent/>
        </v-tabs-window-item>

        <v-tabs-window-item value="fifth">
          <ContactComponent/>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>