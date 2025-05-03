// Crea un div con una clase inicial. Al hacer clic en un botón, usa 
// classList.toggle() para agregar o quitar una clase CSS que cambie el 
// color de fondo

const div = document.getElementById("miDiv");
const boton = document.getElementById("toggleFondo");

boton.addEventListener("click", function () {
  div.classList.toggle("fondo-activo");
});
