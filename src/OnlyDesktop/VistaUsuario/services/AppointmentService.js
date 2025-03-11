// appointmentService.js

export const appointmentService = {

    // Obtener el primer día del mes con lunes como el primer día de la semana
    getFirstDayOfMonth(month, year) {
        const firstDay = new Date(year, month, 1).getDay();
        // Si el día es domingo (0), lo cambiamos a 6 para que sea el último día de la semana
        return firstDay === 0 ? 6 : firstDay - 1;
    },

    // Obtener el número de días en el mes
    getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    },

    // Generar los días del calendario para el mes actual
    generateDays(month, year) {
        const daysInMonth = this.getDaysInMonth(month, year);
        const firstDay = this.getFirstDayOfMonth(month, year);
        const days = [];
        const today = new Date();
        const isCurrentMonth = month === today.getMonth() && year === today.getFullYear();

        // Llenar los días previos al primer día del mes
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        // Llenar los días del mes
        for (let i = 1; i <= daysInMonth; i++) {
            const isPastDay = isCurrentMonth && i < today.getDate();
            days.push({ date: i, disabled: isPastDay });
        }

        // Asegurarse de que el calendario tenga 6 filas (de 7 días)
        while (days.length < 42) {
            days.push(null);
        }

        return days;
    },

    // Cambiar al mes anterior
    prevMonth(month, year) {
        if (month === 0) {
            month = 11;
            year--;
        } else {
            month--;
        }
        return { month, year };
    },

    // Cambiar al siguiente mes
    nextMonth(month, year) {
        if (month === 11) {
            month = 0;
            year++;
        } else {
            month++;
        }
        return { month, year };
    },

    // Verificar si el día es hoy
    isToday(day, month, year) {
        if (!day) return false;
        const today = new Date();
        return (
            day.date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        );
    },

    // Verificar si el día está seleccionado
    isSelected(day, selectedDate, monthNames, month, year) {
        if (!day) return false;
        return (
            selectedDate &&
            `${day.date} ${monthNames[month]} ${year}` === selectedDate
        );
    },

    // Seleccionar un día
    selectDate(day, month, year, monthNames) {
        if (day) {
            return `${day.date} ${monthNames[month]} ${year}`;
        }
        return null;
    },
};
