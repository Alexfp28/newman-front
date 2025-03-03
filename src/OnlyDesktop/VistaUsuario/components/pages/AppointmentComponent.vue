<script>
import "@/OnlyDesktop/VistaUsuario/styles/appointment-component.css"
import {appointmentService} from "@/OnlyDesktop/VistaUsuario/services/AppointmentService.js"
import {inputService} from "@/OnlyDesktop/VistaUsuario/services/InputService.js"; // Importamos el servicio

export default {
  name: 'AppointmentComponent',
  data() {
    return {
      fullName: '',
      email: '',
      phone: '',
      message: '',
      personal: '',
      hour: '',
      terms: false,
      selectPersonal: ['Peluquero 1', 'Peluquero 2', 'Peluquero 3'],
      selectHours: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'],
      rules: {
        emptyValue: inputService.emptyValue,
        email: inputService.email,
        phoneNumber: inputService.phoneNumber,
      },
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      selectedDate: null,
      monthNames: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
      ],
    };
  },
  computed: {
    // Generar los días del calendario
    days() {
      return appointmentService.generateDays(this.month, this.year);
    }
  },
  methods: {
    // Cambiar al mes anterior
    prevMonth() {
      const { month, year } = appointmentService.prevMonth(this.month, this.year);
      this.month = month;
      this.year = year;
    },

    // Cambiar al siguiente mes
    nextMonth() {
      const { month, year } = appointmentService.nextMonth(this.month, this.year);
      this.month = month;
      this.year = year;
    },

    // Verificar si el día es hoy
    isToday(day) {
      return appointmentService.isToday(day, this.month, this.year);
    },

    // Verificar si el día está seleccionado
    isSelected(day) {
      return appointmentService.isSelected(day, this.selectedDate, this.monthNames, this.month, this.year);
    },

    // Seleccionar una fecha
    selectDate(day) {
      this.selectedDate = appointmentService.selectDate(day, this.month, this.year, this.monthNames);
    },
    // Función para filtrar la entrada del usuario
    filterInput() {
      // Reemplaza cualquier carácter que no sea un número
      this.phone = this.phone.replace(/[^0-9]/g, '');
    },
  },
};
</script>


<template>
  <v-row>
    <v-col class="main-container">
      <section class="calendar-header">
        <v-btn @click="prevMonth"><v-icon icon="mdi-arrow-left" /></v-btn>
        <h2>{{ monthNames[month] }} {{ year }}</h2>
        <v-btn @click="nextMonth"><v-icon icon="mdi-arrow-right" /></v-btn>
      </section>

      <article class="calendar-grid">
        <section class="calendar-day" v-for="(day, index) in days" :key="index">
          <section
              v-if="day !== null"
              class="calendar-cell"
              :class="{
              'calendar-today': isToday(day),
              'calendar-selected': isSelected(day),
            }"
              @click="selectDate(day)"
          >
            {{ day.date }}
          </section>
        </section>
      </article>
    </v-col>

    <v-col v-if="selectedDate" class="form mt-5">
      <!-- Formulario -->
      <v-form @submit.prevent>
        <v-autocomplete
            v-model="hour"
            :items="selectHours"
            :rules="[rules.emptyValue]"
            label="Horas disponibles"
            prepend-icon="mdi-clock-outline"
            variant="outlined"
            required
            clearable
        ></v-autocomplete>

        <v-spacer class="mt-1 mb-1" />

        <v-autocomplete
            v-model="personal"
            :items="selectPersonal"
            :rules="[rules.emptyValue]"
            label="Seleccione personal"
            prepend-icon="mdi-account-switch"
            variant="outlined"
            clearable
            required
        ></v-autocomplete>

        <v-spacer class="mt-1 mb-1" />

        <v-text-field
            v-model="fullName"
            variant="outlined"
            :rules="[rules.emptyValue]"
            label="Nombre Completo"
            prepend-icon="mdi-account"
        ></v-text-field>

        <v-spacer class="mt-1 mb-1" />

        <v-text-field
            v-model="email"
            :rules="[rules.email]"
            label="Email"
            type="email"
            variant="outlined"
            prepend-icon="mdi-email"
        ></v-text-field>

        <v-spacer class="mt-1 mb-1" />

        <v-text-field
            @input="this.filterInput()"
            v-model="phone"
            :rules="[rules.phoneNumber]"
            variant="outlined"
            label="Teléfono"
            type="tel"
            prepend-icon="mdi-cellphone"
        ></v-text-field>

        <v-spacer class="mt-1 mb-1" />

        <v-textarea
            class="form-message-field"
            variant="outlined"
            v-model="message"
            label="Mensaje"
            prepend-icon="mdi-text-box"
            maxlength="200"
            counter
            rows="5"
        ></v-textarea>

        <v-spacer class="mt-1 mb-1" />

        <v-checkbox
            v-model="terms"
            density="comfortable"
            color="secondary"
            hide-details="true"
            label="Al enviar este mensaje, acepto los términos y las condiciones de esta empresa."
        ></v-checkbox>

        <v-btn class="mt-2" type="submit" block>Reserve su cita</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>


<style scoped>
</style>
