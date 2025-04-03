// Escribe una función que tome un número y retorne true si es par o false si es 
// impar. Utiliza el operador módulo (%) y un operador ternario.

const parImpar = (numero) => 
    numero % 2 === 0 ? "true" : "false";

console.log(parImpar(2))
console.log(parImpar(3))

