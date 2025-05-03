// Usa JavaScript para crear un nuevo <li> y agregarlo a una lista <ul>
// que ya exista en tu HTML.


const lista = document.getElementById("lista");
const nuevoElemento = document.createElement("li");
nuevoElemento.innerText = "Item 3 (agregado con JS)";
lista.appendChild(nuevoElemento);
