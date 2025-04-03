// Crea un objeto que represente un estudiante con propiedades como nombre, edad y 
// carrera. Accede e imprime cada propiedad del objeto.

const estudiante = {
    nombre: "Agustina Corneo",
    edad: 21,
    carrera: "Lic Analitica",
}

// opcion 1 (veo sol oel valor)
Object.values(estudiante).forEach(valor => console.log(valor))

// forma 2 (veo campo + valor)
for (let propiedad in estudiante) {
    console.log(propiedad + ": " + estudiante[propiedad]);
}
