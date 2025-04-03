// Crea una función expresada que reciba un array de strings y retorne un string que 
// concatena todos los elementos del array separados por espacios.

// Funcion expresada:
// function sumar (a,b){
//    return a + b
//}

const concatenarString = function(arrayStrings) {
    return arrayStrings.join(" ");
};

// Usa el método .join(" ") para unir los elementos del array en un solo string, 
// separados por un espacio. Retorna el string resultante.

const arrayStrings = ["Hola", "me", "llamo", "Agus", "!"];

console.log(concatenarString(arrayStrings));
