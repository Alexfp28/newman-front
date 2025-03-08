<script>
import {inputService} from "@/OnlyDesktop/VistaUsuario/services/InputService.js";
import '@/assets/main.css'
export default {
  name: "UserProfileSettingsComponent",
  data: () => ({
    fullName: '',
    email: '',
    phone: '',
    description: '',
    terms: false,
    rules: {
      emptyValue: inputService.emptyValue,
      email: inputService.email,
      phoneNumber: inputService.phoneNumber,
    },
    profileImage: "/src/images/unknow_user.jpg",
  }),
  methods: {
    selectImage() {
      this.$refs.fileInput.click(); // Simula el clic en el input file
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.profileImage = URL.createObjectURL(file); // Muestra la imagen seleccionada
        console.log(this.profileImage);
      }
    },
  },
}
</script>

<template>
  <h1 class="text-center pa-6">Información personal</h1>
  <v-row class="pa-10">
    <v-col cols="12" md="3" class="d-flex align-center justify-center">
      <v-container class="d-flex flex-column align-center">
        <!-- Avatar dinámico -->
        <v-avatar
            color="info"
            size="256"
            :image="profileImage"
        ></v-avatar>

        <!-- Input oculto para seleccionar imagen -->
        <input
            type="file"
            ref="fileInput"
            accept="image/*"
            class="d-none"
            @change="onFileChange"
        />

        <!-- Botón para cambiar imagen -->
        <v-btn class="mt-3 color-text" @click="selectImage">Cambiar</v-btn>
      </v-container>
    </v-col>
    <v-col>
      <!-- Form -->
      <v-form @submit.prevent>

        <!-- Full Name -->
        <v-text-field
            v-model="fullName"
            label="Nombre Completo"
            prepend-icon="mdi-account"
            variant="outlined"
        ></v-text-field>

        <!-- Email -->
        <v-text-field
            v-model="email"
            label="Email"
            type="email"
            prepend-icon="mdi-email"
            variant="outlined"
        ></v-text-field>

        <!-- Phone -->
        <v-text-field
            v-model="phone"
            label="Teléfono"
            prepend-icon="mdi-cellphone"
            variant="outlined"
        ></v-text-field>

        <!-- Description -->
        <v-textarea
            class="form-message-field"
            v-model="description"
            label="Mensaje"
            prepend-icon="mdi-text-box"
            maxlength="200"
            counter
            rows="5"
            variant="outlined"
        ></v-textarea>

        <v-btn class="mt-2 color-text" type="submit" block>Guardar</v-btn>

      </v-form>
    </v-col>
  </v-row>
</template>

<style scoped>

.color-text {
  font-weight: bold;
  color: #5ea9b8;
}

</style>