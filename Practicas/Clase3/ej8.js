// Crea una función que salude a una persona. Si no se proporciona el nombre, 
// debe saludar con "Hola, invitado".

function saludar(nombre) {
    if (nombre===""){
        return "Hola, invitado"    
    }else {
        return ("Hola"+" "+nombre)
    }
    }

let nombre="Agustina"
let nombre2=""

console.log(saludar(nombre))
console.log(saludar(nombre2))
