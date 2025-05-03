// Ejercicio 1: Acceder a elementos del DOM
// Crea un archivo HTML con un <h1> y un <p>. Desde JavaScript, 
// selecciona ambos elementos y cambia su texto.

const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");

titulo.innerText = "Título desde JS ";
parrafo.innerText = "Prrafo modificado correctamente.";
