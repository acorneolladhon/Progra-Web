// Crea una lista de elementos <li> en tu HTML. Desde JavaScript elimina 
// el primer elemento de esa lista.

const lista = document.getElementById("lista");

// Verifica si hay al menos un elemento <li> dentro de la lista
if (lista.firstElementChild) {
  lista.removeChild(lista.firstElementChild);
}

