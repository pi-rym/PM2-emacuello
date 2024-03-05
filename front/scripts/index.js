import { tempData } from "./tempData.js";

// const [guardians, startWars, ring] = tempData
console.log(tempData)
function crearCards(data) {
    const [guardians, starWars, ring] = data;
    
    function destructurar(pelicula){
        const {title,year,director,duration,genre,rate,poster} = pelicula;
        const generos = genre.join(", ");

        const titulo =  document.createElement("h2");
        const descripcion = document.createElement("p");
        const imagen = document.createElement("img");
        const div = document.createElement("div");

        titulo.innerHTML = title;
        descripcion.innerHTML = `${title}" es una película dirigida por ${director}, lanzada en ${year}. Tiene una duración de ${duration} y recibió una puntuación de ${rate} puntos según la crítica especializada. Los géneros de la película incluyen: ${generos}`
        imagen.src = poster;

        titulo.classList.add('text-center');
        descripcion.classList.add('text-center');
        div.classList.add('image-card');

        
        div.onmouseover = () => changeBackground(poster);
        div.onmouseout = () => restoreBackground();

        div.appendChild(imagen);
        div.appendChild(titulo)
        div.appendChild(descripcion);
        
        return div;
    }
    const contenedor = document.getElementById('container');
    contenedor.innerHTML = '';

    contenedor.appendChild(destructurar(guardians));
    contenedor.appendChild(destructurar(starWars));
    contenedor.appendChild(destructurar(ring));
}

crearCards(tempData)






