<script>
import {inputService} from "@/OnlyDesktop/VistaUsuario/services/InputService.js";
import {controllerService} from "@/OnlyDesktop/VistaUsuario/services/ControllerService.js";

export default {
  name: "ContactComponent",
  data: () => ({
    fullName: null,
    email: null,
    phone: null,
    message: null,
    emailSent: false,
    terms: false,
    rules: {
      emptyValue: inputService.emptyValue,
      email: inputService.email,
      phoneNumber: inputService.phoneNumber,
    },
  }),
  methods: {

    // Al darle al boton de contáctanos
    async sendEmail() {
      const {valid} = await this.$refs.contactForm.validate();
      if (valid) {
        //--------------------------------------
        // Aquí deberemos mandar la info al back
        //--------------------------------------
        await this.sendContact();

        this.reset()
      }
    },

    async sendContact() {
      const contactData = {
        name: this.fullName,
        email: this.email,
        phone: this.phone,
        message: this.message,
      }

      try {
        const response = await controllerService.saveContact(contactData);
        console.log("Email enviado:", response);
        this.emailSent = true;

        // Recargar la página después de un tiempo
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      } catch (error) {
        console.error("Hubo un problema al enviar el email", error);
        alert("Hubo un problema al enviar el mail.");
      }
    },

    // Resetear el formulario
    reset() {
      this.$refs.contactForm.reset();
    }
  }

}
</script>

<template>
  <v-snackbar
      :timeout="3000"
      v-model="emailSent"
      class="elevation-24"
      color="#5ea9b8"
      location="top right"
  >
    <v-icon icon="mdi-check"></v-icon>
    Email enviado con éxito!
  </v-snackbar>

  <v-container class="contact-container" fluid>
    <!-- Banner -->
    <div class="banner">
      <v-img
          :width="1800"
          :max-height="400"
          cover
          src="src/images/newmen.png"
          class="image-container"
      >
        <div class="banner-content font-weight-bold">
          <h1>Aquí para lo que necesites!</h1>
        </div>
      </v-img>
    </div>

    <v-row class="map-form">

      <!-- Form -->
      <v-col class="form" cols="12" sm="6">
        <v-form ref="contactForm">
          <v-text-field
              v-model="fullName"
              :rules="[rules.emptyValue]"
              label="Nombre Completo"
              prepend-icon="mdi-account"
              variant="outlined"
          ></v-text-field>

          <v-text-field
              v-model="email"
              :rules="[rules.email]"
              label="Email"
              type="email"
              prepend-icon="mdi-email"
              variant="outlined"
          ></v-text-field>

          <v-text-field
              v-model="phone"
              :rules="[rules.phoneNumber]"
              label="Teléfono"
              prepend-icon="mdi-cellphone"
              variant="outlined"
          ></v-text-field>

          <v-textarea
              :rules="[rules.emptyValue]"
              class="form-message-field"
              v-model="message"
              label="Mensaje"
              prepend-icon="mdi-text-box"
              maxlength="200"
              counter
              rows="5"
              variant="outlined"
          ></v-textarea>

          <v-checkbox
              style="margin-top: 25px"
              v-model="terms"
              density="comfortable"
              color="secondary"
              hide-details="true"
          >
            <template v-slot:label>
              <span>Al enviar este mensaje, aceptas los <a href="/termsandconditions" target="_blank">términos y condiciones</a>.</span>
            </template>
          </v-checkbox>

          <v-btn
              class="mt-2 font-weight-bold"
              block
              color="#5ea9b8"
              :disabled="!terms"
              @click="sendEmail"
          >
            Contáctanos
          </v-btn>
        </v-form>
      </v-col>

      <!-- Map -->
      <v-col class="map" cols="12" sm="6">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.829108202451!2d-0.22835036848151077!3d39.820818384757445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd600dfe9051f76b%3A0xa6addab9bdee4cda!2sNewmen!5e0!3m2!1ses!2ses!4v1740694439647!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </v-col>

    </v-row>

    <!-- Also in -->
    <v-row justify="center" align="center" class="alsoin">
      <v-col cols="12" class="text-center">
        <h2 class="alsoin-title">También nos puedes encontrar en</h2>
      </v-col>

      <v-row justify="center" spacing="4">
        <v-col cols="12" sm="6" md="6" class="d-flex justify-center">
          <v-card class="pa-4 rounded-lg elevation-3 text-center" color="white" style="height: 100%; width: 100%">
            <v-card-title class="text-h6 font-weight-bold">
              <v-icon color="blue" size="60">mdi-facebook</v-icon>
            </v-card-title>
            <v-card-subtitle>
              <a href="https://www.facebook.com/newmenpeluqueria/" target="_blank">
                Visítanos en Facebook
              </a>
            </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="6" class="d-flex justify-center">
          <v-card class="pa-4 rounded-lg elevation-3" color="white" style="height: 100%; width: 100%">
            <v-card-title class="text-h6 font-weight-bold text-center">
              Horario
            </v-card-title>
            <v-card-text class="text-center">
              Lunes - Viernes: X:XX AM - X:XX PM <br>
              Sábado: X:XX AM - X:XX PM <br>
              Domingo: Cerrado
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>

  </v-container>
</template>


<style scoped>
.contact-container {
  justify-content: center;
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
  padding: 3rem;
  flex-wrap: wrap;
}

.map {
  padding: 0;
}

.form {
  max-width: 50%;
  padding: 0 5%;
}

.form-message-field {
  height: 150px;
}

.alsoin-title {
  font-size: 2.5rem;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.alsoin {
  background-color: #ececec;
  padding: 2%;
  border-radius: 40px;
}

a {
  text-decoration: none;
  color: #1877f2;
  font-weight: bold;
}

.v-text-field, .v-text-area {
  padding: 3px !important;
}

/* Media Queries */
@media (max-width: 768px) {
  .banner-content h1 {
    font-size: 2.5rem;
  }

  .map-form {
    flex-direction: column;
    padding: 1rem;
  }

  .form {
    max-width: 100%;
  }

  .map iframe {
    height: 350px;
  }

  .alsoin-title {
    font-size: 1.8rem;
  }

  .alsoin {
    background-color: #ececec;
    padding: 6%;
    border-radius: 40px;
  }

  .map, .form {
    padding: 3%;
  }
}
</style>