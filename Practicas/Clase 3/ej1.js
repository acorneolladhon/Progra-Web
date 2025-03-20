//  Escribe una función que tome tres números como argumentos y retorne el mayor de ellos. 
// Llama a la función con diferentes valores e imprime el resultado.

function mayor (a,b,c){
    if (a > b && a > c){
        return a
    }else {
        if (b>a && b>c){
            return b
        }else {
            if ( c>a && c > b){
                return c
            }
        }
    }
}

console.log(mayor(1,2,3))
