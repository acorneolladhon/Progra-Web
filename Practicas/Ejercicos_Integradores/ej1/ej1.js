//Declaración de Variables y Objetos
let estudiantes = [];

//Función para agregar un estudiante
function agregarEstudiante(nombre, edad, calificaciones) {
  const nuevoEstudiante = {
    nombre: nombre,
    edad: edad,
    calificaciones: calificaciones,
    esEstudianteActivo: true
  };
  estudiantes.push(nuevoEstudiante);
}

//Función para calcular el promedio de calificaciones
function calcularPromedio(calificaciones) {
  const suma = calificaciones.reduce((total, nota) => total + nota, 0);
  return (suma / calificaciones.length).toFixed(2);
}

//Función para mostrar estudiantes activos
function mostrarEstudiantesActivos() {
  console.log("Estudiantes activos:");
  estudiantes.forEach(est => {
    if (est.esEstudianteActivo) {
      console.log(`- ${est.nombre}`);
    }
  });
}

//Función con operador ternario para evaluar edad
function evaluarEdad(edad) {
  return edad >= 18 ? "Mayor de edad" : "Menor de edad";
}

//Función para alternar el estado activo de un estudiante
function activarDesactivarEstudiante(nombre) {
  const estudiante = estudiantes.find(est => est.nombre === nombre);
  if (estudiante) {
    estudiante.esEstudianteActivo = !estudiante.esEstudianteActivo;
    console.log(`Estado de ${nombre} actualizado a: ${estudiante.esEstudianteActivo}`);
  } else {
    console.log(`Estudiante "${nombre}" no encontrado.`);
  }
}

//Ciclo for para mostrar nombre y promedio de cada estudiante
function mostrarNombresYPromedios() {
  console.log("Estudiantes y sus promedios:");
  for (let i = 0; i < estudiantes.length; i++) {
    const est = estudiantes[i];
    const promedio = calcularPromedio(est.calificaciones);
    console.log(`- ${est.nombre}: Promedio = ${promedio}`);
  }
}

//Filtrar estudiantes mayores de edad
function obtenerEstudiantesMayores() {
  return estudiantes.filter(est => est.edad >= 18);
}

//Calcular promedio de edades con reduce
function calcularPromedioEdad() {
  const totalEdad = estudiantes.reduce((acc, est) => acc + est.edad, 0);
  return (totalEdad / estudiantes.length).toFixed(2);
}
