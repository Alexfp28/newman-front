<script>
export default {
  name: "CatalogComponent",
  data() {
    return {
      products: [
        {"id": 1, "title": "Producto 1", "subtitle": "Categoría A", "description": "Descripción del producto 1."},
        {"id": 2, "title": "Producto 2", "subtitle": "Categoría B", "description": "Descripción del producto 2."},
        {"id": 3, "title": "Producto 3", "subtitle": "Categoría C", "description": "Descripción del producto 3."},
        {"id": 4, "title": "Producto 4", "subtitle": "Categoría D", "description": "Descripción del producto 4."},
        {"id": 5, "title": "Producto 5", "subtitle": "Categoría A", "description": "Descripción del producto 5."},
        {"id": 6, "title": "Producto 6", "subtitle": "Categoría B", "description": "Descripción del producto 6."},
        {"id": 7, "title": "Producto 7", "subtitle": "Categoría C", "description": "Descripción del producto 7."},
        {"id": 8, "title": "Producto 8", "subtitle": "Categoría D", "description": "Descripción del producto 8."},
        {"id": 9, "title": "Producto 9", "subtitle": "Categoría A", "description": "Descripción del producto 9."},
        {"id": 10, "title": "Producto 10", "subtitle": "Categoría B", "description": "Descripción del producto 10."},
        {"id": 11, "title": "Producto 11", "subtitle": "Categoría C", "description": "Descripción del producto 11."},
        {"id": 12, "title": "Producto 12", "subtitle": "Categoría D", "description": "Descripción del producto 12."},
        {"id": 13, "title": "Producto 13", "subtitle": "Categoría A", "description": "Descripción del producto 13."},
        {"id": 14, "title": "Producto 14", "subtitle": "Categoría B", "description": "Descripción del producto 14."},
        {"id": 15, "title": "Producto 15", "subtitle": "Categoría C", "description": "Descripción del producto 15."},
        {"id": 16, "title": "Producto 16", "subtitle": "Categoría D", "description": "Descripción del producto 16."},
        {"id": 17, "title": "Producto 17", "subtitle": "Categoría A", "description": "Descripción del producto 17."},
        {"id": 18, "title": "Producto 18", "subtitle": "Categoría B", "description": "Descripción del producto 18."},
        {"id": 19, "title": "Producto 19", "subtitle": "Categoría C", "description": "Descripción del producto 19."},
        {"id": 20, "title": "Producto 20", "subtitle": "Categoría D", "description": "Descripción del producto 20."}
      ]
    };
  }
};
</script>

<template>
  <v-container class="catalog-container fill-height" fluid>
    <v-row justify="center">
      <v-col
          v-for="(product, i) in products"
          :key="i"
          cols="12" sm="6" md="4" lg="3"
      >
        <v-card class="m-8" hover>
          <!-- Imagen -->
          <v-img
              src="src/images/newmen.png"
              height="200px"
              cover
          ></v-img>

          <!-- Título y subtítulo -->
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-text>{{ product.description }}</v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>