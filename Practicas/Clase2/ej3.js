// Declara una variable para almacenar un objeto que represente un coche con propiedades 
// como marca, modelo y año. Imprime el tipo de cada propiedad con typeof.

const coche = {
    marca: "Ford",
    modelo: "Focus",
    año: 2015,
  }

var tipoMarca = typeof coche.marca
var tipoModelo = typeof coche.modelo
var tipoAño = typeof coche.año

console.log(tipoMarca, tipoModelo, tipoAño)
