// Crea una función recursiva que calcule la suma de los números de 1 hasta n.

function sumaNumeros1n (n){
    let resultado = 0 // inicializo la variable reusltado en 0
    for (let i = 1; i <= n; i++) {  // recorro de 1 a num
        resultado +=i;  // sumo i hasta que llego a i=n
    }
    return resultado;  

}

console.log(sumaNumeros1n(4))
console.log(sumaNumeros1n(1))
console.log(sumaNumeros1n(0))