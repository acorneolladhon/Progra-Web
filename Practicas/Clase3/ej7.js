// Escribe una función que tome un número como argumento y retorne su factorial. 
// Utiliza una estructura if para manejar el caso base.

const factorial = (num) => {
    if (num === 0 || num === 1) return 1;  // Caso base con if
    let resultado = 1;

    for (let i = 2; i <= num; i++) {  // Bucle desde 2 hasta num
        resultado *= i;  // Multiplicamos el resultado por i
    }
    return resultado;  
};

console.log(factorial(5)); 
console.log(factorial(3)); 
console.log(factorial(1)); 


//              ITERACIONES
// -     i   resultado: *= i    resultado nuevo
// 1ª    2       1 × 2	            2
// 2ª    3       2 × 3	            6
// 3ª    4       6 × 4	            24
// 4ª    5       24 × 5	            120