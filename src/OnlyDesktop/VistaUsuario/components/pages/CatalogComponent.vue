<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  data() {
    return {
      products: [
        { id: 1, title: 'Producto 1', description: 'Descripción del producto 1.', image: 'src/images/newmen.png' },
        { id: 2, title: 'Producto 2', description: 'Descripción del producto 2.', image: 'src/images/newmen.png' },
        { id: 3, title: 'Producto 3', description: 'Descripción del producto 3.', image: 'src/images/newmen.png' },
        { id: 4, title: 'Producto 4', description: 'Descripción del producto 4.', image: 'src/images/newmen.png' },
        { id: 5, title: 'Producto 5', description: 'Descripción del producto 5.', image: 'src/images/newmen.png' },
        { id: 6, title: 'Producto 6', description: 'Descripción del producto 6.', image: 'src/images/newmen.png' },
      ],
    };
  },
};
</script>

<template>
  <v-container class="catalog-container" fluid>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-center my-4">Catálogo</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="10">
        <swiper
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            :loop="true"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <v-card class="m-4" hover>
              <v-img :src="product.image" height="200px" cover></v-img>
              <v-card-title>{{ product.title }}</v-card-title>
              <v-card-text>{{ product.description }}</v-card-text>
            </v-card>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>
