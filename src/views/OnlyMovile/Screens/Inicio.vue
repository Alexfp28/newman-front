<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

//variable to backend
const name = ref('');
const telf = ref('');
const mail = ref('');
const pasword = ref('');


const passwordVisible = ref(false);
//change password visibility
const togglePassword = () => {
  passwordVisible.value = !passwordVisible.value;
};



// Enviar datos al backend
const SendData = () => {
  console.log("Data sent:", name.value, telf.value, mail.value, pasword.value);
};

// Función de login (navegar a HomeView)
const login = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <v-text-field
      v-model="name"
      clearable
      label="Nombre"
      variant="solo"
      size="large"
  ></v-text-field>

  <v-text-field
      v-model="telf"
      clearable
      label="Teléfono"
      variant="solo"
      size="large"
  ></v-text-field>

  <v-text-field
      v-model="mail"
      clearable
      label="Email"
      variant="solo"
      size="large"
  ></v-text-field>

  <v-row align="center" no-gutters>
    <v-col cols="10">
      <v-text-field
          v-model="pasword"
          clearable
          label="Contraseña"
          variant="solo"
          size="large"
          :type="passwordVisible ? 'text' : 'password'"
      ></v-text-field>
    </v-col>
    <v-col cols="2" class="d-flex justify-end">
      <v-btn @click="togglePassword" icon>
        <v-icon>{{ passwordVisible ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon>
      </v-btn>
    </v-col>
  </v-row>

  <p>Ya tengo cuenta, <button @click="login">Iniciar sesión</button></p>
  <button @click="SendData">Enviar</button>
  <p/>
  <p>
    Nombre: {{ name }}<br>
    Teléfono: {{ telf }}<br>
    Email: {{ mail }}<br>
    Contraseña: {{ pasword }}
  </p>
</template>

<style scoped>
button {
  color: #3aaef5;
}
</style>
