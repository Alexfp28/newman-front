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

  <v-row style="margin: 10px">
    <v-btn id="btn_iniciar_sesion"
           prepend-icon="mdi-account"
           text="Iniciar Sesión"
           variant="tonal"
           @click="dialog_iniciar_sesion = true"
    ></v-btn>
    <v-btn id="btn_crear_cuenta"
           prepend-icon="mdi-account-plus"
           text="Crear Cuenta"
           variant="tonal"
           @click="dialog_crear_cuenta = true"
    ></v-btn>
  </v-row>

  <div id="dialog_iniciar_sesion">
    <v-dialog
        v-model="dialog_iniciar_sesion"
        max-width="600"
        transition="dialog-bottom-transition"
    >

      <v-card
          prepend-icon="mdi-account"
          title="Iniciar Sesión"
      >
        <v-card-text>
          <v-row dense>
            <v-col
                cols="12"
                md="4"
                sm="6"
            >
              <v-text-field
                  label="Email*"
                  required
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="4"
                sm="6"
            >
              <v-text-field
                  label="Contraseña*"
                  type="password"
                  required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>

          <v-btn
              text="Cancelar"
              variant="plain"
              @click="dialog_iniciar_sesion = false"
          ></v-btn>

          <v-btn
              text="Iniciar Sesión"
              variant="tonal"
              @click="dialog_iniciar_sesion = false; snackbar_inicio_sesion = true"
          ></v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <div id="dialog_crear_cuenta">
    <v-dialog
        v-model="dialog_crear_cuenta"
        max-width="600"
        transition="dialog-bottom-transition"

    >

      <v-card
          prepend-icon="mdi-account-plus"
          title="Crear Cuenta"
      >
        <v-card-text>

          <v-row dense>
            <v-text-field
                label="Nombre*"
                required
            ></v-text-field>
          </v-row>

          <v-row dense>
            <v-text-field
                label="Email*"
                required
            ></v-text-field>
          </v-row>

          <v-row dense>
            <v-text-field
                label="Contraseña*"
                type="password"
                required
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-text-field
                label="Teléfono*"
                required
            ></v-text-field>
          </v-row>

        </v-card-text>

        <v-card-actions>

          <v-btn
              text="Cancelar"
              variant="plain"
              @click="dialog_crear_cuenta = false"
          ></v-btn>

          <v-btn
              text="Crear Cuenta"
              variant="tonal"
              @click="dialog_crear_cuenta = false; snackbar_crear_cuenta = true"
          ></v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
