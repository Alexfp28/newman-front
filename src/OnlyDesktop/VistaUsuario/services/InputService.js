// inputService.js

export const inputService = {
    // Validar el campo vacío
    emptyValue: (value) => !!value || 'No puedes dejar este campo vacío.',

    // Validar el correo electrónico
    email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Correo electrónico no válido.';
    },

    // Validar el número de teléfono
    phoneNumber: (value) => {
        const pattern = /^[0-9]+(\.[0-9]{1,2})?$/;
        return pattern.test(value) || 'Número no válido';
    },
};
