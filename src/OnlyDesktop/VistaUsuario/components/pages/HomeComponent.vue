<template>
  <v-container class="home-container" fluid>

    <v-row>

      <!-- Columna izquierda: Bienvenida y Servicios -->
      <v-col cols="12" md="6">
        <!-- Sección de Bienvenida -->
        <v-row justify="center" align="center">
          <v-col cols="12" class="text-center">
            <h1 class="welcome-title">
              Bienvenid@ a NewMen
            </h1>
            <p class="welcome-text">
              Tu mejor opción para cortes de cabello, estilo y cuidado personal.
              ¡Descubre la experiencia premium que mereces!
            </p>
            <v-btn class="cta-button" large to="/appointment">
              Pedir una cita
            </v-btn>
          </v-col>
        </v-row>

        <!-- Sección de Servicios -->
        <v-row class="services-section" justify="center">
          <v-col cols="12">
            <h2 class="section-title text-center">Nuestros Servicios</h2>
          </v-col>
          <v-col
              cols="12"
              md="4"
              v-for="(service, index) in services"
              :key="index"
              class="text-center"
          >
            <v-card class="service-card" flat>
              <v-card-text>
                <v-icon class="service-icon">{{ service.icon }}</v-icon>
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-description">{{ service.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- Columna derecha: Carrusel de imágenes -->
      <v-col cols="12" md="6">
        <h2 class="text-center carousel-title">
          Nuestros cortes de pelo <v-icon>mdi-scissors-cutting</v-icon>
        </h2>
        <v-carousel
            :show-arrows="false"
            hide-delimiters
            height="600"
            cycle
        >
          <v-carousel-item
              v-for="(image, index) in haircutImages"
              :key="index"
              :src="image"
              class="carousel-image"
          ></v-carousel-item>
        </v-carousel>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: 'mdi-scissors-cutting',
          title: 'Cortes de Cabello',
          description: 'Estilos modernos y clásicos para todas las edades.',
        },
        {
          icon: 'mdi-face-woman-shimmer',
          title: 'Barbería',
          description: 'Perfilado de barba y bigote con un acabado perfecto.',
        },
        {
          icon: 'mdi-hair-dryer',
          title: 'Tratamientos',
          description: 'Cuidado capilar con productos de alta calidad.',
        },
      ],
      haircutImages: [
        'src/images/haircuts/haircut_1.png',
        'src/images/haircuts/haircut_2.png',
        'src/images/haircuts/haircut_3.jpg',
      ],
    };
  },
};
</script>

<style scoped>

/* Sección de Bienvenida */
.welcome-title {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
}

.welcome-text {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #333;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #555;
}

/* Sección de Servicios */
.section-title {
  font-size: 2.5rem;
  margin: 7rem 0 0;
  color: #333;
}

/* Cartas */
.service-card {
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0.5rem 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 3rem;
  color: #5ea9b8;
  margin-bottom: 0.5rem;
}

.service-title {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: #333;
}

.service-description {
  font-size: 1rem;
  color: #777;
}

/* Carrusel */
.carousel-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
}
</style>