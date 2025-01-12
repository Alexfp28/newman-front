<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

//variable to backend
const name = ref('');
const telf = ref('');
const mail = ref('');
const pasword = ref('');


const passwordVisible = ref(false);
//change password visibility
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};


// Send data to backend
const SendData = () => {
  console.log("Data sent:", name.value, telf.value, mail.value, pasword.value);
};

// Navigate to LogIn
const login = () => {
  router.push({name: 'Login'});
};
</script>

<template>
  <v-row align="center"  class="background" no-gutters>
    <v-col cols="12">
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
      <v-text-field
          v-model="pasword"
          clearable
          label="Contraseña"
          variant="solo"
          size="large"
          :type="passwordVisible ? 'text' : 'password'"
      >
        <template #append-inner>
          <v-btn @click="togglePasswordVisibility " icon>
            <v-icon>{{ passwordVisible ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon>
          </v-btn>
        </template>
      </v-text-field>
      <p class="text">Ya tengo cuenta,
        <button @click="login">Iniciar sesión</button>
      </p>
      <v-btn @click="SendData" class="send-button">Confirmar</v-btn>
      <p/>
    </v-col>
  </v-row>
</template>

<style scoped>
.background{
  background-color: #1a1a1a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
button {
  color: #3aaef5;
  font-weight: bold;
}

.text{
  color: #f8f8f8;
}
v-btn {
  padding: 0;
  margin: 0;
  height: 100%;
}

.send-button {
  color: white;
  background-color: #3aaef5;
  border-radius: 25px;
}
</style>
