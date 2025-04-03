// Usa el método forEach para recorrer un array de números y para cada número imprime 
// si es par o impar. Utiliza el método find para buscar el primer número mayor que 
// 20 en un array de números. Usa el método some para verificar si en un array de 
// edades hay al menos una persona mayor de 18 años.

const numeros = [6,7,8,9,10,15,22,26,43,21]
numeros.forEach(parImpar)
const primerMayorA20= numeros.find(mayor)
console.log("El primer número mayor a 20 es:", primerMayorA20);


const hayMayorDe18 = numeros.some(edad => edad > 18);
console.log("¿Hay al menos una persona mayor de 18 años?", hayMayorDe18 ? "Sí" : "No");


function parImpar(numero){
    if (numero%2 === 0){
        console.log(numero,"Par")
    }else{
        console.log(numero,"Impar")
    }
}

function mayor(numero) {
    return numero > 20; // Retorna true cuando encuentra el primer número mayor a 20
}


