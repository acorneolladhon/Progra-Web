// Reescribe una función que tome una hora (formato 24 horas) y devuelva "Buenos días" 
// si es antes de las 12, "Buenas tardes" si es entre las 12 y 18, o "Buenas noches" 
// si es después de las 18, utilizando operadores ternarios.

const saludarSegunHora = (hora) => 
    hora < 12 ? "Buenos días" : 
    hora < 18 ? "Buenas tardes" : "Buenas noches";

console.log(saludarSegunHora(10)); // "Buenos días"
console.log(saludarSegunHora(14)); // "Buenas tardes"
console.log(saludarSegunHora(20)); // "Buenas noches"
console.log(saludarSegunHora(12)); // "Buenas noches"