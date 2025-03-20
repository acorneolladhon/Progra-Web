let edad=19
let acompañado= true
let resultado = edad>18 && acompañado == true ? "Puede pasar" : "No puede pasar"
console.log(resultado)

/**+++++++++++++++++++++++++++++++++++++++++++++*/

// for (let i = 0; i < 101; i++ ){
//     console.log(i)
// }

/*+++++++++++++++++++++++++++++++++++++++++++++*/
// let x= 0
// while (x<0){
//     console.log(x)
//     x+=1
// }

/*+++++++++++++++++++++++++++++++++++++++++++++++*/
// let NUMEROS = [1,2,3,4,5]
// for (let i=0; i < NUMEROS.length; i++){
//     console.log(NUMEROS[i])
// }

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
// function encontrarValor (array,valor){
//     for (let i=0; i < array.lenght; i++){
//         if ( array[i]=== valor ){
//             return i
//         } else{
//             return "El valor no existe"
//         }
//     }
// }


function duplicar (a,b){
    return a*b
}

function calculadora (num1, num2, funcion){
    return funcion(num1,num2)}
console.log(calculadora(2,2,duplicar))

