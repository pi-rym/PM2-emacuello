$.get('https://students-api.2.us-1.fl0.io/movies', (data) => {
    data.forEach(crearCards)
})

function crearCards(data) {
    const titulo = document.createElement("h3");
    const descripcion = document.createElement("p");
    const imagen = document.createElement("img");
    const div = document.createElement("div");
    const divFront = document.createElement("div");
    const divBack = document.createElement("div");
    const divLink = document.createElement("div");
    const link = document.createElement("a");

    titulo.innerHTML = data.title;
    descripcion.innerHTML = `${data.title}" es una película dirigida por ${data.director}, lanzada en el año ${data.year}. Tiene una duración de ${data.duration} y recibió una puntuación de ${data.rate} puntos según la crítica especializada. Los géneros de la película incluyen: ${data.genre.join(", ")}`
    imagen.src = data.poster;

    div.classList.add('my-card');
    divFront.classList.add('face', 'front');
    divBack.classList.add('face', 'back');
    divLink.classList.add('my-link');

    divFront.appendChild(imagen);
    divFront.appendChild(titulo);

    const backTitulo = document.createElement("h3");
    backTitulo.innerHTML = data.title;
    divBack.appendChild(backTitulo);
    divBack.appendChild(descripcion);

    link.href = '#'
    link.innerHTML = 'Detalles';
    divLink.appendChild(link);
    divBack.appendChild(divLink)

    div.appendChild(divFront);
    div.appendChild(divBack);

    const contenedor = document.getElementById('container');
    contenedor.appendChild(div);
}








