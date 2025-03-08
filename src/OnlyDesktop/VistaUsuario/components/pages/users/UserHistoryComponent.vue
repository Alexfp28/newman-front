<script>
export default {
  name: "HistorialCitas",
  data() {
    return {
      page: 1,
      itemsPerPage: 5,
      search: "",
      // Hay que prepararlo para cuando se haga la llamada
      citas: [
        // { id: 1, cliente: "Juan Pérez", fecha: "2025-03-10", hora: "10:00 AM", estado: "Confirmada" },
        { id: 1, fecha: "10/3/2025", hora: "10:00", trabajador: "Mariola", valoracion: 4 },
        { id: 2, fecha: "11/3/2025", hora: "13:00", trabajador: "Mireya", valoracion: 5 },
        { id: 3, fecha: "09/3/2025", hora: "12:00", trabajador: "Mireya", valoracion: 2 },
        { id: 4, fecha: "08/3/2025", hora: "11:00", trabajador: "Mariola", valoracion: 3 },
      ],
      // Esto lo podemos dejar tal y como esta, tenemos que preparar la llamada del back
      headers: [
        { title: "Fecha", key: "fecha" },
        { title: "Hora", key: "hora" },
        { title: "Peluquer@", key: "trabajador" },
        { title: "Valoracion", key: "valoracion" },
        // { title: "Estado", key: "estado" },
      ],
    };
  },
  computed: {
    pageCount () {
      return Math.ceil(this.citas.length / this.itemsPerPage)
    },
  },
};
</script>

<template>
  <v-container>
    <h1 class="text-center mb-4">Historial de Citas</h1>

    <!-- Barra de búsqueda -->
    <v-text-field
        v-model="search"
        label="Buscar..."
        prepend-icon="mdi-magnify"
        variant="outlined"
        class="mb-4"
    ></v-text-field>

    <!-- Tabla de citas -->
    <v-data-table
        v-model:page="page"
        :headers="headers"
        :items="citas"
        :search="search"
        :items-per-page="itemsPerPage"
        class="elevation-1"
    >
      <template v-slot:item.valoracion="{ item }">
        <v-rating
            :model-value="item.valoracion"
            color="orange-darken-2"
            density="compact"
            size="small"
            readonly
        ></v-rating>
      </template>

      <template v-slot:bottom>
        <div class="text-center pt-2">
          <v-pagination
              v-model="page"
              :length="pageCount"
          ></v-pagination>
        </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<style scoped>
.text-center {
  text-align: center;
}
</style>
