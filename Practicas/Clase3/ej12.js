// Escribe una función que verifique si una contraseña cumple con ciertos criterios: 
// al menos 8 caracteres, contiene un número y una letra mayúscula. 
// Utiliza operadores lógicos para combinar las condiciones.

function verificarContraseña(contraseña) {
    // si cumple todas estas condiciones esta ok, sino esta mal!
    const tieneLongitud = contraseña.length >= 8; 
    const tieneNumero = /\d/.test(contraseña); // Verificar si hay un número (0-9)
    const tieneMayuscula = /[A-Z]/.test(contraseña); // Verificar si hay una mayúscula 
// el .test es un metodo propio de js
    // Verificamos todas las condiciones
    return tieneLongitud && tieneNumero && tieneMayuscula;
}

// Pruebas
console.log(verificarContraseña("abc123")); // no tiene may ni 8 car
console.log(verificarContraseña("Abcdeh")); // no tiene num ni 8 car
console.log(verificarContraseña("holahola123")); //no tiene may
console.log(verificarContraseña("Agust1na"));  // tiene 8 car, 1 num, 1 mays! deberia dar ture
