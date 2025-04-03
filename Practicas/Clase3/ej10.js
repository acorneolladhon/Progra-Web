// Escribe una función que reciba un día de la semana (en número) y retorne el 
// nombre del día. Usa una estructura switch.

const obtenerDia = (numeroDia) => {
    switch (numeroDia) {
        case 0: return "Domingo";
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miercoles";
        case 4: return "JUeves";
        case 5: return "Viernes";
        case 6: return "Sabado";
        default: return "Número de dia inválido"; 
    }
};

// Pruebas
console.log(obtenerDia(0)); 
console.log(obtenerDia(3)); 
console.log(obtenerDia(6)); 
console.log(obtenerDia(7)); 
