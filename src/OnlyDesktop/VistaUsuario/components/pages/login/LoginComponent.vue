<script setup>
import {ref} from 'vue';

const dialog_iniciar_sesion = ref(false);
const dialog_crear_cuenta = ref(false);

const snackbar_inicio_sesion = ref(false);
const snackbar_crear_cuenta = ref(false);

const text_snackbar_iniciar_sesion = ref("Aviso de inicio de sesión");
const text_snackbar_crear_cuenta = ref("Aviso de crear cuenta");

</script>

<template>

<!--  <v-row style="margin: 10px">-->
<!--    <v-btn id="btn_iniciar_sesion"-->
<!--           prepend-icon="mdi-account"-->
<!--           text="Iniciar Sesión"-->
<!--           variant="tonal"-->
<!--           @click="dialog_iniciar_sesion = true"-->
<!--    ></v-btn>-->
<!--    <v-btn id="btn_crear_cuenta"-->
<!--           prepend-icon="mdi-account-plus"-->
<!--           text="Crear Cuenta"-->
<!--           variant="tonal"-->
<!--           @click="dialog_crear_cuenta = true"-->
<!--    ></v-btn>-->
<!--  </v-row>-->

<!--  <div id="dialog_iniciar_sesion">-->
  <section class="login login-container">

<!--    <section class="cardTitle text-center">-->
<!--      <h1 class="help-title">Iniciar Sesion</h1>-->
<!--      <p class="help-text">Para elegir una cita nueva solo selecciona una fecha y rellena el formulario.</p>-->
<!--    </section>-->

    <v-card
        prepend-icon="mdi-account"
        title="Iniciar Sesión"
        class="pa-5 cardLogin"
    >
      <v-card-text>
        <v-row dense>
          <v-col
              cols="12"
          >
            <v-text-field
                label="Email*"
                variant="outlined"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col
              cols="12"
          >
            <v-text-field
                label="Contraseña*"
                type="password"
                variant="outlined"
                required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn
            text="Iniciar Sesión"
            variant="tonal"
            @click=""
        ></v-btn>

        <v-btn
            text="Registrarse"
            variant="plain"
            @click=""
        ></v-btn>
      </v-card-actions>
    </v-card>
  </section>

  <section class="login-container">
    <v-card
        prepend-icon="mdi-account-plus"
        title="Crear Cuenta"
    >
      <v-card-text>

        <v-row dense>
          <v-text-field
              label="Nombre"
              variant="outlined"
              required
          ></v-text-field>
        </v-row>

        <v-row dense>
          <v-text-field
              label="Email"
              variant="outlined"
              required
          ></v-text-field>
        </v-row>

        <v-row dense>
          <v-text-field
              label="Contraseña"
              variant="outlined"
              type="password"
              required
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field
              label="Teléfono"
              variant="outlined"
              required
          ></v-text-field>
        </v-row>

      </v-card-text>

      <v-card-actions>

        <v-btn
            text="Crear Cuenta"
            variant="tonal"
            @click="dialog_crear_cuenta = false; snackbar_crear_cuenta = true"
        ></v-btn>

        <v-btn
            text="Cancelar"
            variant="plain"
            @click="dialog_crear_cuenta = false"
        ></v-btn>

      </v-card-actions>
    </v-card>
  </section>

<!--  </div>-->
  <div id="snackbar_inicio_sesion">
    <v-snackbar
        v-model="snackbar_inicio_sesion"
    >
      {{ text_snackbar_iniciar_sesion }}

      <v-btn
          color="pink"
          variant="text"
          @click="snackbar_inicio_sesion = false"
      >
      </v-btn>
    </v-snackbar>
  </div>
  <div id="snackbar_crear_cuenta">
    <v-snackbar
        v-model="snackbar_crear_cuenta"
    >
      {{ text_snackbar_crear_cuenta }}

      <v-btn
          color="pink"
          variant="text"
          @click="snackbar_crear_cuenta = false"
      >
      </v-btn>
    </v-snackbar>
  </div>

</template>

<style scoped>

.login {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

.cardTitle {
  grid-column-start: 2;
  grid-row-start: 1;
}

.cardLogin {
  grid-column-start: 2;
  grid-row-start: 2;
  height: 100%;
}

.help-title {
  font-size: 2.5rem;
  color: #333;
}

.help-text {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}
</style>
