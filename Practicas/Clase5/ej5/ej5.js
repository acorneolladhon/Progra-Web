// Crea un botón que al hacer clic cambie el texto de un <p> a "¡Hola, Mundo!"

const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("cambiarTexto");

boton.addEventListener("click", function () {
    parrafo.innerText = "¡Hola Mundo!";
});