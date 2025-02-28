// Lista de nombres de meses
const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

// Obtener el primer día del mes
const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
};

// Obtener el número de días en el mes
const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
};

// Generar el calendario (7 columnas para los días de la semana)
const generateCalendar = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
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
};

// Cambiar al mes anterior
const prevMonth = (month, year) => {
    if (month === 0) {
        return { month: 11, year: year - 1 }; // Si es enero, ir a diciembre del año anterior
    } else {
        return { month: month - 1, year };
    }
};

// Cambiar al siguiente mes
const nextMonth = (month, year) => {
    if (month === 11) {
        return { month: 0, year: year + 1 }; // Si es diciembre, ir a enero del siguiente año
    } else {
        return { month: month + 1, year };
    }
};

// Verificar si un día es el día de hoy
const isToday = (day, month, year) => {
    if (!day) return false;
    const today = new Date();
    return day.date === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();
};

// Verificar si un día está seleccionado
const isSelected = (day, selectedDate, month, year) => {
    if (!day) return false;
    return selectedDate && `${day.date} ${monthNames[month]} ${year}` === selectedDate;
};

// Seleccionar un día
const selectDate = (day, month, year) => {
    if (day) {
        return `${day.date} ${monthNames[month]} ${year}`;
    }
    return null;
};

export default {
    monthNames,
    generateCalendar,
    prevMonth,
    nextMonth,
    isToday,
    isSelected,
    selectDate
};
