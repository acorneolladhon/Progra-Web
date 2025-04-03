// Convierte la función del ejercicio anterior a una función de flecha. Además, 
// agrega una validación para que, si el array está vacío, retorna un mensaje de 
// advertencia.


const concatenarStrings = (palabras) => {
    if (palabras.length === 0) {
        return "El array está vacío.";
    }
    return palabras.join(" ");
};

const concatenarStrings2 = (palabras2) => {
    if (palabras2.length === 0) {
        return "El array está vacío.";
    }
    return palabras2.join(" ");
};


const palabras = ["Hola", "me", "llamo", "Agus", "!!!"];
const palabras2 = [];
console.log(concatenarStrings(palabras));
console.log(concatenarStrings2(palabras2));

