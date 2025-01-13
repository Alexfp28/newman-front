<template>
  <v-container class="home-container fill-height" fluid>
    <!-- Dividir pantalla en dos columnas -->
    <v-row>
      <!-- Columna izquierda -->
      <v-col cols="12" md="6" class="left-section">
        <!-- Sección de Bienvenida -->
        <v-row justify="center" align="center" class="welcome-section">
          <v-col cols="12" class="text-center">
            <h1 class="welcome-title">Bienvenido a NewMen</h1>
            <p class="welcome-text">
              Tu mejor opción para cortes de cabello, estilo y cuidado personal.
              ¡Descubrí la experiencia premium que merecés!
            </p>
            <v-btn class="cta-button" color="azul-clarito" large>
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

      <!-- Columna derecha -->
      <v-col cols="12" md="6" class="right-section">
        <h2 class="section-title text-center">
          Nuestros cortes de pelo <v-icon>mdi-scissors-cutting</v-icon>
        </h2>
        <v-carousel
            class="haircut-carousel"
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
  }
};
</script>

<style scoped>
/* Colores */
:root {
  --color-blanco: #ffffff;
  --color-azul-oscuro: #213555;
  --color-azul-clarito: #3AAEF5;
}

/* Estilos generales */
.home-container {
  background-color: var(--color-azul-oscuro);
  color: var(--color-blanco);
  padding: 24px;
}

.left-section {
  padding-right: 16px;
  border-right: 1px solid var(--color-azul-clarito);
}

.right-section {
  padding-left: 16px;
}

.welcome-section {
  margin-bottom: 48px;
}

.welcome-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-azul-clarito);
}

.welcome-text {
  font-size: 1.2rem;
  margin: 16px 0;
  color: var(--color-blanco);
}

.cta-button {
  background-color: var(--color-azul-clarito);
  color: var(--color-blanco);
  text-transform: uppercase;
  font-weight: bold;
}

.services-section {
  padding: 24px 0;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 32px;
  color: var(--color-azul-clarito);
}

.service-card {
  background-color: var(--color-azul-oscuro);
  border: 1px solid var(--color-azul-clarito);
  color: var(--color-blanco);
  border-radius: 8px;
  padding: 16px;
}

.service-icon {
  font-size: 2.5rem;
  color: var(--color-azul-clarito);
  margin-bottom: 16px;
}

.service-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-blanco);
  margin-bottom: 8px;
}

.service-description {
  font-size: 1rem;
  color: var(--color-blanco);
}
</style>