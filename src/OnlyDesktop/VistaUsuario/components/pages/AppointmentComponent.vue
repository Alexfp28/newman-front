<template>
  <v-row>
    <v-col>
      <div class="calendar-header">
        <v-btn @click="prevMonth"><v-icon icon="mdi-arrow-left"/></v-btn>
        <h2>{{ monthNames[month] }} {{ year }}</h2>
        <v-btn @click="nextMonth"><v-icon icon="mdi-arrow-right"/></v-btn>
      </div>

      <div class="calendar-grid">
        <div class="calendar-day" v-for="(day, index) in days" :key="index">
          <div
              v-if="day !== null"
              class="calendar-cell"
              v-for="n in 1"
              :key="n"
              :class="{
                'calendar-today': isToday(day),
                'calendar-selected': isSelected(day),
              }"
              @click="selectDate(day)"
          >
            {{ day.date }}
          </div>
        </div>
      </div>
    </v-col>
    <v-col v-if="selectedDate" class="form">

      <!-- Form -->
      <v-form @submit.prevent>

        <!-- Full Name -->
        <v-text-field
            v-model="fullName"
            :rules="rules"
            label="Nombre Completo"
            prepend-icon="mdi-account"
        ></v-text-field>

        <!-- Email -->
        <v-text-field
            v-model="email"
            :rules="rules"
            label="Email"
            type="email"
            prepend-icon="mdi-email"
        ></v-text-field>

        <!-- Phone -->
        <v-text-field
            v-model="phone"
            :rules="rules"
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
            v-model="terms"
            density="comfortable"
            color="secondary"
            hide-details="true"
            label="Al enviar este mensaje, acepto los términos y las condiciones de este sitio."
        ></v-checkbox>

        <v-btn class="mt-2" type="submit" block>Submit</v-btn>

      </v-form>
    </v-col>
  </v-row>

</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'AppointmentComponent',
  setup() {
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const now = new Date();
    const month = ref(now.getMonth());
    const year = ref(now.getFullYear());
    const selectedDate = ref(null);

    // Obtener el primer día del mes
    const getFirstDayOfMonth = (month, year) => {
      return new Date(year, month, 1).getDay();
    };

    // Obtener el número de días en el mes
    const getDaysInMonth = (month, year) => {
      return new Date(year, month + 1, 0).getDate();
    };

    // Generar el calendario (7 columnas para los días de la semana)
    const days = computed(() => {
      const daysInMonth = getDaysInMonth(month.value, year.value);
      const firstDay = getFirstDayOfMonth(month.value, year.value);
      const days = [];

      // Llenar los días previos al primer día del mes
      for (let i = 0; i < firstDay; i++) {
        days.push(null);
      }

      // Llenar los días del mes
      for (let i = 1; i <= daysInMonth; i++) {
        days.push({ date: i });
      }

      // Asegurarse de que el calendario tenga 6 filas (de 7 días)
      while (days.length < 42) {
        days.push(null);
      }

      return days;
    });

    // Cambiar al mes anterior
    const prevMonth = () => {
      if (month.value === 0) {
        month.value = 11;
        year.value--;
      } else {
        month.value--;
      }
    };

    // Cambiar al siguiente mes
    const nextMonth = () => {
      if (month.value === 11) {
        month.value = 0;
        year.value++;
      } else {
        month.value++;
      }
    };

    const isToday = (day) => {
      if (!day) return false; // Asegúrate de que `day` no sea `null`
      const today = new Date();
      return day.date === today.getDate() &&
          month.value === today.getMonth() &&
          year.value === today.getFullYear();
    };

    const isSelected = (day) => {
      if (!day) return false; // Asegúrate de que `day` no sea `null`
      return selectedDate.value && `${day.date} ${monthNames[month.value]} ${year.value}` === selectedDate.value;
    };

    const selectDate = (day) => {
      if (day) {
        selectedDate.value = `${day.date} ${monthNames[month.value]} ${year.value}`;
      }
    };


    return {
      monthNames,
      month,
      year,
      days,
      prevMonth,
      nextMonth,
      selectDate,
      selectedDate,
      isToday,
      isSelected,
    };
  },
};
</script>

<style scoped>

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.calendar-day {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-cell {
  width: 5rem;
  height: 5rem;
  text-align: center;
  cursor: pointer;
}

.calendar-cell:hover {
  background-color: lightgray;
}

.calendar-today {
  background-color: #1867c0;
  color: white;
}

.calendar-selected {
  background-color: #6ea771;
  border-radius: 80%;
  color: white;
}
</style>
