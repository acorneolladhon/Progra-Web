// Declara tres variables numéricas. Compara si el primer número es mayor que el 
// segundo y menor que el tercero. Luego, verifica si el segundo número es distinto al 
// tercero. Imprime los resultados de las comparaciones.

const num1 = 6
const num2 = 10
const num3= 3

function compararNumeros(){
if ((num1>num2) && (num1<num3)){
    return true
} else {
    return false
}}

function verificarNumeros(){
    if (num2!=num3){
    return true
} else {
    return false
}}

console.log(compararNumeros())
console.log(verificarNumeros())

