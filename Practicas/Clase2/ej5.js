// Crea un array de 3 objetos que representen películas, cada una con título, 
// director y año de lanzamiento. Imprime el director de la última película.

const peliculas = [
    {titulo: "Titulo A", director: "Director A", añoLanzamiento: 2020},
    {titulo: "Titulo B", director: "Director B", añoLanzamiento: 2025},
    {titulo: "Titulo C", director: "Director C", añoLanzamiento: 2018}
]

console.log(peliculas[peliculas.length-1].director)

// impirmo peliculas, en la posicion long de peliculas -1, el atributo director 
