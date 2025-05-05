<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, FreeMode} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Autoplay],
    };
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Producto 1',
          description: 'Descripción del producto 1.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 1,
          price: 19.99
        },
        {
          id: 2,
          title: 'Producto 2',
          description: 'Descripción del producto 2.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 2,
          price: 29.99
        },
        {
          id: 3,
          title: 'Producto 3',
          description: 'Descripción del producto 3.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 1,
          price: 24.99
        },
        {
          id: 4,
          title: 'Producto 4',
          description: 'Descripción del producto 4.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 2,
          price: 34.99
        },
        {
          id: 5,
          title: 'Producto 5',
          description: 'Descripción del producto 5.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 1,
          price: 15.99
        },
        {
          id: 6,
          title: 'Producto 6',
          description: 'Descripción del producto 6.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 2,
          price: 39.99
        },
        {
          id: 7,
          title: 'Producto 7',
          description: 'Descripción del producto 7.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 1,
          price: 22.99
        },
        {
          id: 8,
          title: 'Producto 8',
          description: 'Descripción del producto 8.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 2,
          price: 28.99
        },
        {
          id: 9,
          title: 'Producto 9',
          description: 'Descripción del producto 9.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 1,
          price: 18.99
        },
        {
          id: 10,
          title: 'Producto 10',
          description: 'Descripción del producto 10.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 2,
          price: 33.99
        },
        {
          id: 11,
          title: 'Producto 11',
          description: 'Descripción del producto 11.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 1,
          price: 21.99
        },
        {
          id: 12,
          title: 'Producto 12',
          description: 'Descripción del producto 12.',
          image: 'https://github.com/Alexfp28/newman-front/blob/main/public/images/newmen.png',
          type: 2,
          price: 31.99
        }
      ]
    };
  },
  computed: {
    type1Products() {
      return this.products.filter(product => product.type === 1);
    },
    type2Products() {
      return this.products.filter(product => product.type === 2);
    }
  }
};
</script>

<template>
  <v-container class="catalog-container" fluid>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="title">Catálogo</h1>
      </v-col>
    </v-row>

    <h1 class="title-type1 text-center"> Productos tipo 1</h1>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <swiper
            :modules="modules"
            :space-between="30"
            :centered="true"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :breakpoints="{
            1024: { slidesPerView: 2 },
            768: { slidesPerView: 2 }
          }"
            style="padding: 20px 0 20px 0"
        >
          <swiper-slide v-for="product in type1Products" :key="product.id">
            <v-card class="m-4" hover>
              <v-img :src="product.image" height="200px" cover></v-img>
              <v-card-title>
                <span>{{ product.title }}</span>
                <v-spacer></v-spacer>
                <span class="text-h6" style="font-weight: bold; color: #2e7d32;">
                  {{ product.price.toFixed(2) }}€
                </span>
              </v-card-title>
              <v-card-text>{{ product.description }}</v-card-text>
            </v-card>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>

    <h1 class="title-type1 text-center"> Productos tipo 2</h1>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <swiper
            :modules="modules"
            :space-between="30"
            :centered="true"
            :loop="true"
            :autoplay="{ delay: 2000, disableOnInteraction: false, reverseDirection: true }"
            :breakpoints="{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 }
          }"
            style="padding: 20px 0 20px 0"
        >
          <swiper-slide v-for="product in type2Products" :key="product.id">
            <v-card class="m-4" hover>
              <v-img :src="product.image" height="200px" cover></v-img>
              <v-card-title>
                <span>{{ product.title }}</span>
                <v-spacer></v-spacer>
                <span class="text-h6" style="font-weight: bold; color: #2e7d32;">
                  {{ product.price.toFixed(2) }}€
                </span>
              </v-card-title>
              <v-card-text>{{ product.description }}</v-card-text>
            </v-card>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.title {
  font-size: 5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
}

/* Versión de móviles */
@media (max-width: 768px) {
  .title {
    text-align: center;
    font-size: 5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 2rem;
  }
}

</style>
