const generateCarrousel = (movie, isLocal) => {
  const sectionMisFavs = document.getElementById("sectionMisFavs");
  const sectionTusFavs = document.getElementById("sectionTusFavs");
  const targetSection = isLocal ? sectionMisFavs : sectionTusFavs;

  movie.map((info) => {
    ///destructuring
    const { title, poster, year, director, genre, duration, rate, id } = info;
    /// creacion de elementos
    const divCaro = document.createElement("div");
    divCaro.classList.add("carousel-item");
    if (id === 1) {
      divCaro.classList.add("active");
    }
    const divCap = document.createElement("div");
    divCap.classList.add("carousel-caption");
    divCap.classList.add("d-none");
    divCap.classList.add("d-md-block");
    divCap.classList.add("bg-1");

    const titleCaro = document.createElement("h3");
    // titleCard.classList.add("card-title");
    const postCaro = document.createElement("img");
    postCaro.classList.add("w-100");
    postCaro.classList.add("h-img");
    postCaro.alt = `Slice of ${title}`;
    const descriptionCaro = document.createElement("p");
    descriptionCaro.classList.add("p-1");
    ///adecuacion de valores
    titleCaro.innerText = title;
    postCaro.src = poster;
    descriptionCaro.innerHTML = `Publicada  en el año ${year}, dirigida por: "${director}". <br> Generos:  ${genre} <br> Duracion: ${duration} <br> Se lleva la califiacion de:  ${rate}`;
    divCap.appendChild(titleCaro);
    divCaro.appendChild(postCaro);
    divCap.appendChild(descriptionCaro);
    divCaro.appendChild(divCap);
    targetSection.appendChild(divCaro);
  });
};

generateCarrousel(favFilms, true);
//pista
function pista() {
  setTimeout(() => {
    alert("Ey! Prueba con revisar el EsterEgg en el DOM ;)");
  }, "2000");
}
pista();
