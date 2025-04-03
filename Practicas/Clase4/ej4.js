// Crea un array con los nombres de 5 países y usa un ciclo for...of para imprimir 
// cada uno.

const paises = ["Argentina", "Francia", "Brasil", "Italia", "España"]

let text=""
for (let x of paises){
    text+=x + " "
}
console.log(text)

