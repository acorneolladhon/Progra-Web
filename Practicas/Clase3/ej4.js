// Escribe una función que tome una temperatura en grados Celsius como argumento y 
// devuelva un mensaje que indique si hace frío (menor a 15 grados), templado 
// (entre 15 y 25 grados) o calor (mayor a 25 grados).


const evaluarTemperatura = (grados) => {
    if (grados < 15) {
        return "Hace frío";
    } else if (grados >= 15 && grados <= 25) {
        return "Día Templado";
    } else {
        return "Hace calor";
    }
};

let grados = 18;
console.log(evaluarTemperatura(grados));
