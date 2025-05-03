// En tu HTML crea varios párrafos <p>. Usa JavaScript y un bucle 
// for o forEach para recorrer todos los <p> y cambiar su contenido.

const parrafos = document.querySelectorAll("p");

parrafos.forEach(function(p, i) {
  p.innerText = `Parrafo ${i + 1} --> modificado en bucle`;
});
