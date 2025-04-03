console.log("Hola Mundo")
document.getElementById("nombre")
console.log(document.getElementById("nombre").value)

let botonSaludo= document.getElementById("saludar")

botonSaludo.addEventListener("click", function <>{
    let nombre=document.getElementById("nombre").value
    alert("Hola $(nombre")
})