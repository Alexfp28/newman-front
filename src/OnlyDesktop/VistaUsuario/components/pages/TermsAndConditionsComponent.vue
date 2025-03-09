<template>
  <v-container class="terms-container">
    <v-card class="pa-6 mb-4 terms-card" elevation="4">
      <v-card-title class="text-h5 font-weight-bold">Términos y Condiciones para el Envío de Consultas</v-card-title>
      <v-card-text>
        <p><strong>1. Uso de la información:</strong> La información proporcionada a través de nuestro sitio web se utilizará únicamente para responder a sus consultas y ofrecer asistencia relacionada con nuestros servicios.</p>
        <p><strong>2. Privacidad:</strong> Sus datos personales serán tratados de manera confidencial y no serán compartidos con terceros sin su consentimiento, salvo que la ley lo exija.</p>
        <p><strong>3. Exactitud de los datos:</strong> Garantiza que la información proporcionada a través de nuestro sitio web es veraz y correcta. No nos hacemos responsables de errores o datos incorrectos ingresados.</p>
        <p><strong>4. Respuesta:</strong> La respuesta a sus consultas puede tardar dependiendo del volumen de solicitudes, sin garantía de un tiempo específico.</p>
        <p><strong>5. Uso indebido:</strong> No se aceptarán interacciones con contenido ofensivo, spam o información fraudulenta. Nos reservamos el derecho de ignorar o bloquear interacciones que incumplan estas normas.</p>
        <p><strong>6. Comunicación adicional:</strong> Podemos contactarle por email o teléfono si es necesario para aclaraciones o seguimiento de su consulta.</p>
      </v-card-text>
    </v-card>

    <v-card class="pa-6 mb-4 terms-card" elevation="4">
      <v-card-title class="text-h5 font-weight-bold">Términos y Condiciones para la Solicitud de Cita</v-card-title>
      <v-card-text>
        <p><strong>1. Solicitud de cita:</strong> Al solicitar una cita a través de nuestro sitio web o por teléfono, usted acepta los términos establecidos en esta página. La disponibilidad de la cita está sujeta a la disponibilidad de nuestros estilistas.</p>
        <p><strong>2. Confirmación de cita:</strong> Una vez realizada la solicitud, se le enviará una confirmación de cita. Si no recibiera la confirmación, por favor, contacte con nosotros para verificar la disponibilidad.</p>
        <p><strong>3. Cancelaciones:</strong> Si desea cancelar o reprogramar su cita, le solicitamos que lo haga con al menos 24 horas de antelación.</p>
        <p><strong>4. Puntualidad:</strong> Le recomendamos llegar al menos 10 minutos antes de la hora de su cita. Si llega tarde, su cita podría verse reducida o reprogramada, dependiendo de la disponibilidad.</p>
        <p><strong>5. Información personal:</strong> Los datos personales proporcionados serán tratados de manera confidencial y utilizados únicamente para la gestión de su cita. No compartimos su información con terceros sin su consentimiento.</p>
        <p><strong>6. Modificaciones de los términos:</strong> Nos reservamos el derecho de modificar estos términos en cualquier momento. Se le notificará cualquier cambio relevante relacionado con los términos de solicitud de cita.</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.terms-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.terms-card {
  width: 100%;
  max-width: 1200px;
}
</style>
