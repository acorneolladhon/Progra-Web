// Crea un botón en tu HTML. Cuando se haga clic, cambia el color de fondo 
// del body usando document.body.style.

const boton = document.getElementById("cambiarColor");

boton.addEventListener("click", function () {
  document.body.style.backgroundColor = "#00FFFF";
});