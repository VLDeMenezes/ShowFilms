function Server() {
  $.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {
    const filmsServer = data;
    generateCards(filmsServer);
  });
}

const generateCards = (movie, isLocal) => {
  const sectionLocal = document.getElementById("sectionLocal");
  const sectionServer = document.getElementById("sectionServer");
  const targetSection = isLocal ? sectionLocal : sectionServer;
  targetSection.innerHTML = "";

  movie.map((info) => {
    ///destructuring
    const { title, poster, year, director, genre, duration, rate } = info;
    /// creacion de elementos
    const divCard = document.createElement("div");
    divCard.classList.add("card");
    const titleCard = document.createElement("h3");
    const postCard = document.createElement("img");
    const descriptionCard = document.createElement("p");
    ///adecuacion de valores
    titleCard.innerText = title;
    postCard.src = poster;
    descriptionCard.innerText = `Publicada en el año ${year}, dirigida por: "${director}". \n Generos:  ${genre} \n Duracion: ${duration} \n Se lleva la califiacion de: \n ${rate}`;
    divCard.appendChild(titleCard);
    divCard.appendChild(postCard);
    divCard.appendChild(descriptionCard);
    targetSection.appendChild(divCard);
  });
};
Server();
const filmsLocal = tempData;
generateCards(filmsLocal, true);
