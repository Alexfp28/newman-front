<template>
  <v-container class="home-container" fluid>

    <!-- Bienvenida y Carousel -->
    <v-row justify="space-around">

      <!-- Columna izquierda: Bienvenida y Servicios -->
      <v-col cols="12" md="5">
        <!-- Sección de Bienvenida -->
        <v-row justify="center" align="center">
          <v-col cols="12" class="text-center">
            <h1 class="title">
              Bienvenid@ a NewMen
            </h1>
            <p class="welcome-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, asperiores dolore, dolorem enim
              eveniet ex expedita fuga ipsa maiores maxime natus nemo numquam quo recusandae repellendus sapiente sint
              veritatis!
            </p>
            <v-btn class="cta-button" large to="/appointment">
              Pedir cita
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
      <v-col cols="12" md="5" class="carousel">
<!--        <h2 class="text-center carousel-title">-->
<!--          Nuestros cortes de pelo-->
<!--          <v-icon>mdi-scissors-cutting</v-icon>-->
<!--        </h2>-->
        <v-carousel
            :show-arrows="false"
            hide-delimiters
            height="800"
            cycle
        >
          <v-carousel-item
              v-for="(image, index) in haircutImages"
              :key="index"
              :src="image"
              cover
              rounded="xl"
          ></v-carousel-item>
        </v-carousel>
      </v-col>

    </v-row>

    <!-- Sección Sobre Nosotras -->
    <v-row justify="center" align="center" class="about-us-section">
      <v-col class="image-container">
        <v-img src="https://github.com/Alexfp28/newman-front/blob/main/public/images/employees/employee1.jpg" class="about-image left-image" cover></v-img>
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <h2 class="about-title">Sobre Nosotras</h2>
        <p class="about-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem consectetur delectus dolor eligendi,
          impedit maiores, minima nulla odio qui veritatis vitae voluptate voluptatum. Mollitia nesciunt perspiciatis
          quia sapiente tenetur!
        </p>
      </v-col>
      <v-col class="image-container">
        <v-img src="https://github.com/Alexfp28/newman-front/blob/main/public/images/employees/employee2.jpg" class="about-image right-image" cover></v-img>
      </v-col>
    </v-row>

    <!-- Sección Nuestros Clientes -->
    <v-row justify="center" align="center" class="opinions">
      <h2 class="opinions-title">Nuestros Clientes</h2>
      <p class="opinions-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem consectetur delectus dolor eligendi,
        impedit maiores, minima nulla odio qui veritatis vitae voluptate voluptatum. Mollitia nesciunt perspiciatis quia
        sapiente tenetur!
      </p>
      <v-row>
        <v-col
            v-for="(opinion, index) in opinions"
            :key="index"
            cols="12"
            sm="6"
            md="4"
        >
          <v-card
              class="pa-4 rounded-lg elevation-3"
              color="white"
          >
            <v-card-title class="text-h6 font-weight-bold">
              {{ opinion.title }}
            </v-card-title>

            <v-card-subtitle class="text-grey-darken-1">
              {{ opinion.personName }}
            </v-card-subtitle>

            <v-card-text class="mt-2">
              {{ opinion.text }}
            </v-card-text>

            <v-card-actions class="align-center">
              <v-rating
                  :model-value="opinion.rating"
                  color="amber"
                  half-increments
                  readonly
                  density="compact"
              ></v-rating>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
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
          title: 'Cortes',
          description: 'Estilos modernos y clásicos de cabello para todas las edades.',
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
        'https://github.com/Alexfp28/newman-front/blob/main/public/images/haircuts/haircut_1.png',
        'https://github.com/Alexfp28/newman-front/blob/main/public/images/haircuts/haircut_2.png',
        'https://github.com/Alexfp28/newman-front/blob/main/public/images/haircuts/haircut_3.png',
      ],
      opinions: [
        {
          title: 'Excelente servicio',
          personName: "Mariana López",
          text: "El mejor corte que me han hecho en años. El personal es muy atento y profesional.",
          rating: 4
        },
        {
          title: 'Muy recomendado',
          personName: "Carlos Méndez",
          text: "Ambiente agradable y estilistas expertos. Me dejaron justo el look que quería.",
          rating: 4.5
        },
        {
          title: 'Volveré sin duda',
          personName: "Sofía Ramírez",
          text: "Me encantó el trato y la calidad del servicio. Además, los precios son razonables.",
          rating: 5
        }
      ]
    };
  },
};
</script>

<style scoped>

/* Sección de Bienvenida */
.title {
  font-size: 5rem;
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
  margin: 4rem 0 0;
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
.carousel, .opinions{
  background-color: #ececec;
  padding: 5%;
  border-radius: 40px;
}

.carousel-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

/* Sección Sobre Nosotras */
.about-us-section {
  margin-top: 80px !important;
}

.about-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.about-text {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.about-image {
  width: 100%;
  max-height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.left-image {
  transform: rotate(-5deg);
  max-width: 250px;
  height: 400px;
}

.right-image {
  transform: rotate(5deg);
  max-width: 250px;
  height: 400px;
}

/* Sección Opiniones */
.opinions {
  margin-top: 80px !important;
}

.opinions-title {
  font-size: 2.5rem;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.opinions-text {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}

/* Versión de móviles */
@media (max-width: 768px) {

  .title {
    font-size: 2.5rem;
  }

  .carousel {
    display: none;
  }

}

</style>