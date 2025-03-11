import axios from "axios";

const backendURL = "http://localhost:8080";

export const controllerService = {

    saveAppointment(appointmentData) {
        return axios.post(`${backendURL}/api/appointments`, appointmentData)
            .then(response => response.data)
            .catch(error => {
                console.error("Error al reservar la cita:", error);
                throw error;
            });
    },

    saveContact(contactData) {
        return axios.post(`${backendURL}/api/contact`, contactData)
            .then(response => response.data)
            .catch(error => {
                console.error("Error al reservar la cita:", error);
                throw error;
            });
    }
}