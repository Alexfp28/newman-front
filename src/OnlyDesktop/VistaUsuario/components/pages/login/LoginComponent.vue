<script setup>
import {ref} from 'vue';
import {inputService} from '@/OnlyDesktop/VistaUsuario/services/InputService.js';

// Estado de los tabs
const tab = ref('login');

// Datos del formulario
const email = ref('');
const password = ref('');
const fullName = ref('');
const phone = ref('');

// Snackbars
const snackbar_inicio_sesion = ref(false);
const snackbar_crear_cuenta = ref(false);
const text_snackbar_iniciar_sesion = ref("Aviso de inicio de sesión");
const text_snackbar_crear_cuenta = ref("Aviso de crear cuenta");

// Reglas de validación
const rules = {
  emptyValue: inputService.emptyValue,
  email: inputService.email,
  phoneNumber: inputService.phoneNumber,
  password: inputService.password,
};
</script>

<template>
  <v-container class="login-container">
    <v-card class="auth-card">

      <!-- Tabs -->
      <v-tabs v-model="tab" align-tabs="center">
        <v-tab value="login">Iniciar Sesión</v-tab>
        <v-tab value="register">Crear Cuenta</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <!-- Formulario de Login -->
        <v-window-item value="login">
          <v-card-text>
            <v-text-field
                v-model="email"
                :rules="[rules.email]"
                label="Email"
                type="email"
                prepend-icon="mdi-email"
                variant="outlined"
            ></v-text-field>

            <v-text-field
                v-model="password"
                :rules="[rules.password]"
                label="Contraseña"
                type="password"
                prepend-icon="mdi-lock"
                variant="outlined"
                required
            ></v-text-field>

          </v-card-text>

          <v-card-actions>
            <v-btn text="Iniciar Sesión" variant="tonal" @click="snackbar_inicio_sesion = true"></v-btn>
          </v-card-actions>
        </v-window-item>

        <!-- Formulario de Registro -->
        <v-window-item value="register">
          <v-card-text>

            <v-text-field
                prepend-icon="mdi-account"
                :rules="[rules.emptyValue]"
                v-model="fullName"
                label="Nombre"
                variant="outlined"
                required
            ></v-text-field>

            <v-text-field
                v-model="email"
                prepend-icon="mdi-email"
                :rules="[rules.email]"
                label="Email"
                variant="outlined"
                required
            ></v-text-field>

            <v-text-field
                v-model="password"
                :rules="[rules.password]"
                label="Contraseña"
                type="password"
                prepend-icon="mdi-lock"
                variant="outlined"
                required
            ></v-text-field>


            <v-text-field
                v-model="phone"
                prepend-icon="mdi-cellphone"
                :rules="[rules.phoneNumber]"
                label="Teléfono"
                variant="outlined"
                required
            ></v-text-field>

          </v-card-text>

          <v-card-actions>
            <v-btn text="Crear Cuenta" variant="tonal" @click="snackbar_crear_cuenta = true"></v-btn>
          </v-card-actions>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>

  <!-- Snackbars -->
  <v-snackbar v-model="snackbar_inicio_sesion">
    {{ text_snackbar_iniciar_sesion }}
    <v-btn color="pink" variant="text" @click="snackbar_inicio_sesion = false">Cerrar</v-btn>
  </v-snackbar>

  <v-snackbar v-model="snackbar_crear_cuenta">
    {{ text_snackbar_crear_cuenta }}
    <v-btn color="pink" variant="text" @click="snackbar_crear_cuenta = false">Cerrar</v-btn>
  </v-snackbar>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
}

.auth-card {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 40px;
}
</style>
