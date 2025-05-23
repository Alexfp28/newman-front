<script>
import "@/OnlyDesktop/VistaUsuario/styles/appointment-component.css";
import {appointmentService} from "@/OnlyDesktop/VistaUsuario/services/AppointmentService.js";
import {inputService} from "@/OnlyDesktop/VistaUsuario/services/InputService.js";
import {controllerService} from "@/OnlyDesktop/VistaUsuario/services/ControllerService.js";

export default {
  name: "AppointmentComponent",
  data() {
    return {
      appointmentCreated: false,
      description: null,
      personal: null,
      hour: null,
      terms: false,
      selectPersonal: ["Peluquero 1", "Peluquero 2", "Peluquero 3"],
      selectHours: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00",],
      rules: {
        emptyValue: inputService.emptyValue,
        email: inputService.email,
        phoneNumber: inputService.phoneNumber,
      },
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      selectedDate: null,
      monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",],
    };
  },
  computed: {
    // Generar los días del calendario
    days() {
      return appointmentService.generateDays(this.month, this.year);
    },
  },
  methods: {
    // Cambiar al mes anterior
    prevMonth() {
      const {month, year} = appointmentService.prevMonth(this.month, this.year);
      this.month = month;
      this.year = year;
    },

    // Cambiar al siguiente mes
    nextMonth() {
      const {month, year} = appointmentService.nextMonth(this.month, this.year);
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

    // Validar el formulario
    async validate() {
      const {valid} = await this.$refs.form.validate();
      if (valid) {
        await this.sendAppointment();
      }
    },

    // Al darle al boton de elegir otro día
    chooseOtherDay() {
      this.reset()
      this.selectedDate = false
    },

    // Enviar la cita
    async sendAppointment() {
      console.log("Cita enviada!");
      const appointmentData = {
        // TODO ALOPEZ ->  Aqui hay que poner el usuario que ha iniciado sesion.
        // user: this.user
        date: this.selectedDate,  // Fecha seleccionada
        hour: this.hour,  // Hora seleccionada
        personal: this.personal,  // Personal seleccionado
        description: this.description || "",  // Mensaje opcional
      };

      try {
        const response = await controllerService.saveAppointment(appointmentData);
        console.log("Cita creada con éxito:", response);
        this.appointmentCreated = true;

        // Recargar la página después de un tiempo
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      } catch (error) {
        console.error("Hubo un problema al reservar la cita", error);
        alert("Hubo un problema al reservar la cita.");
      }
    },

    // Resetear el formulario
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<template>

  <v-snackbar
      :timeout="3000"
      v-model="appointmentCreated"
      class="elevation-24"
      color="#5ea9b8"
      location="top right"
  >
    <v-icon icon="mdi-check"></v-icon>
    Cita reservada con éxito!
  </v-snackbar>

  <v-container class="appointment-container" fluid>
    <v-row>

      <!-- Calendar Column -->
      <v-col>
        <section class="calendar-header">
          <v-btn @click="prevMonth" :disabled="month === new Date().getMonth() && year === new Date().getFullYear()">
            <v-icon icon="mdi-arrow-left"/>
          </v-btn>
          <h1 class="month-title">{{ monthNames[month] }} {{ year }}</h1>
          <v-btn @click="nextMonth">
            <v-icon icon="mdi-arrow-right"/>
          </v-btn>
        </section>

        <article class="calendar-grid">
          <section class="calendar-day" v-for="(day, index) in days" :key="index">
            <section
                v-if="day !== null"
                class="calendar-cell"
                :class="{
                          'calendar-today': isToday(day),
                          'calendar-selected': isSelected(day),
                          'calendar-disabled': day.disabled
                }"
                @click="!day.disabled && selectDate(day)"
            >
              {{ day.date }}
            </section>
          </section>
        </article>
      </v-col>
    </v-row>
    <v-dialog
        v-model="selectedDate"
        max-width="600"
        persistent
    >
      <v-card
          prepend-icon="mdi-calendar-check"
          :title="selectedDate"
      >

        <!-- Formulario -->
        <v-form ref="form" style="padding: 10px 40px 40px 40px">
          <v-autocomplete
              v-model="hour"
              :items="selectHours"
              :rules="[rules.emptyValue]"
              label="Horas disponibles"
              prepend-icon="mdi-clock-outline"
              variant="outlined"
              required
          ></v-autocomplete>

          <v-spacer class="mt-2 mb-1"/>

          <v-autocomplete
              v-model="personal"
              :items="selectPersonal"
              :rules="[rules.emptyValue]"
              label="Seleccione personal"
              prepend-icon="mdi-account-switch"
              variant="outlined"
              required
          ></v-autocomplete>

          <v-spacer class="mt-2 mb-1"/>

          <v-textarea
              class="form-description-field"
              variant="outlined"
              v-model="description"
              label="Mensaje"
              prepend-icon="mdi-text-box"
              maxlength="200"
              counter
              rows="5"
          ></v-textarea>

          <v-spacer class="mt-2 mb-1"/>

          <v-checkbox
              v-model="terms"
              density="comfortable"
              color="secondary"
              hide-details="true"
          >
            <template v-slot:label>
              <span>Al enviar este mensaje, aceptas los <a href="/termsandconditions" target="_blank">términos y condiciones</a>.</span>
            </template>
          </v-checkbox>

          <!-- Submit / Close Buttons -->
          <v-row class="mt-2">
            <v-col>
              <v-btn
                  color="#ff8a8a"
                  style="color: white"
                  prepend-icon="mdi-close"
                  class="mt-2 font-weight-bold"
                  @click="chooseOtherDay"
                  block
              >
                Elegir Otro Día
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                  color="#5ea9b8"
                  prepend-icon="mdi-check"
                  class="mt-2 font-weight-bold"
                  @click="validate"
                  :disabled="!terms"
                  block
              >
                Reserve Su Cita
              </v-btn>

            </v-col>
          </v-row>

        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<style scoped>
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.calendar-day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}


.calendar-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  height: 90px;
}

.month-title {
  font-size: 2rem;
  color: #333;
}

.calendar-disabled {
  color: #aaa;
  background-color: #f5f5f5;
  pointer-events: none;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .calendar-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .calendar-cell {
    height: 70px;
    font-size: 20px;
  }

  .month-title {
    font-size: 1.5rem;
  }

}


</style>
