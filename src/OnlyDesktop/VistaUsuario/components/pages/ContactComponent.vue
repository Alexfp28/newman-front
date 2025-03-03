<script>
import {inputService} from "@/OnlyDesktop/VistaUsuario/services/InputService.js";

export default {
  name: "ContactComponent",
  data: () => ({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    terms: false,
    rules: {
      emptyValue: inputService.emptyValue,
      email: inputService.email,
      phoneNumber: inputService.phoneNumber,
    },
  }),
}
</script>

<template>
  <v-container class="contact-container fill-height" fluid>

    <!-- Banner -->
    <div class="banner">
      <v-img
          :width="1900"
          :max-height="500"
          cover
          src="src/images/newmen.png"
          class="image-container"
      >
        <div class="banner-content">
          <h1>Aquí para lo que necesites!</h1>
        </div>
      </v-img>
    </div>

    <v-row class="map-form">

      <!-- Map -->
      <v-col class="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.829108202451!2d-0.22835036848151077!3d39.820818384757445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd600dfe9051f76b%3A0xa6addab9bdee4cda!2sNewmen!5e0!3m2!1ses!2ses!4v1740694439647!5m2!1ses!2ses"
            width="100%"
            height="500px"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </v-col>

      <v-col class="form">

        <!-- Form -->
        <v-form @submit.prevent>

          <!-- Full Name -->
          <v-text-field
              v-model="fullName"
              :rules="[rules.emptyValue]"
              label="Nombre Completo"
              prepend-icon="mdi-account"
          ></v-text-field>

          <!-- Email -->
          <v-text-field
              v-model="email"
              :rules="[rules.email]"
              label="Email"
              type="email"
              prepend-icon="mdi-email"
          ></v-text-field>

          <!-- Phone -->
          <v-text-field
              v-model="phone"
              :rules="[rules.phoneNumber]"
              label="Teléfono"
              prepend-icon="mdi-cellphone"
          ></v-text-field>

          <!-- Message -->
          <v-textarea
              class="form-message-field"
              v-model="message"
              label="Mensaje"
              prepend-icon="mdi-text-box"
              maxlength="200"
              counter
              rows="5"
          ></v-textarea>

          <!-- Terms Conditions -->
          <v-checkbox
              class="mt-3"
              v-model="terms"
              density="comfortable"
              color="secondary"
              hide-details="true"
              label="Al enviar este mensaje, acepto los términos y las condiciones de esta empresa."
          ></v-checkbox>

          <v-btn class="mt-2" type="submit" block>Contáctanos</v-btn>

        </v-form>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.image-container {
  position: relative;
  width: 100%;
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 900;
  font-size: 2rem;
  text-align: center;
}

.map-form {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 4rem;
  height: 100%;
}

.map {
  padding: 0;
}

.form {
  max-width: 50%;
  padding: 0 5% 0 5%
}

.form-message-field {
  height: 150px;
}

</style>
