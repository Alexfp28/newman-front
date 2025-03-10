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
        const pattern = /^[0-9]+$/;
        return pattern.test(value) || 'Número de teléfono no válido.';
    },

    // Validar contraseña segura
    password: (value) => {
        if (!value) return 'No puedes dejar este campo vacío.';
        if (value.length < 8) return 'La contraseña debe tener al menos 8 caracteres.';
        if (!/[A-Z]/.test(value)) return 'Debe contener al menos una letra mayúscula.';
        if (!/[a-z]/.test(value)) return 'Debe contener al menos una letra minúscula.';
        if (!/[0-9]/.test(value)) return 'Debe contener al menos un número.';
        if (!/[\W_]/.test(value)) return 'Debe contener al menos un carácter especial (!@#$%^&*).';
        return true;
    }
};
