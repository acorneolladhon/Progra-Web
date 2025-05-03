// Crea un formulario con un input de texto. Cuando el usuario haga clic 
// en "Enviar", verifica con JavaScript que no esté vacío. Si está vacío, 
// muestra un alert con un mensaje.

const fomrulario= document.getElementById("formulario")
fomrulario.addEventListener("submit", function(event){
    const inputNombre= document.getElementById("nombre");

    if (inputNombre.value.trim()=== ""){
        alert("No puede quedar el campo vacio. Por favor ingrese su nombre");
        event.preventDefault();  // no se envia el formulario
    } else {
        alert("Formulario enviado con exito!")
    }
})