// script.js


document.addEventListener("DOMContentLoaded", () => {   // Este bloque se ejecuta cuando la página termina de cargar
    const form = document.getElementById("miFormulario"); // Conecta JavaScript con tu formulario de HTML.
    // Busca un elemento con id="miFormulario" y lo guarda en la variable form.

    form.addEventListener("submit", (e) => {  // Escucha el evento submit (cuando apretás el botón de enviar en el form).
        e.preventDefault();  //Previene que el formulario se envíe “de verdad” (por ejemplo, que recargue la página o mande datos al servidor). Así podés manejarlo vos.
        const nombre = document.getElementById("nombre").value;  // Agarra lo que el usuario escribió en el campo de texto con id="nombre" y lo guarda.
        alert("Hola " + nombre + "! Gracias por enviar el formulario.");  //Muestra un mensaje personalizado con tu nombre usando alert.
    });
});
