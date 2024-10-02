import { createModal } from "./modalCards.js";

// funcion mapear datos, generar cartas, insertar en contenedores
export const generateCards = (movie) => {
  const section = document.getElementById("section");
  section.innerHTML = "";
  const fragment = document.createDocumentFragment();
  movie.forEach((info, index) => {
    ///destructuring
    const { title, poster, year, director, genre, duration, rate } = info;

    /// creacion de elementos
    const divCard = document.createElement("div");
    divCard.className = "card cardSize border m-3 p-2 pointer";
    divCard.dataset.bsToggle = "modal";
    divCard.dataset.bsTarget = `#modal-${index}`;

    const titleCard = document.createElement("h3");
    titleCard.className = "card-title text-center";
    titleCard.innerText = title;

    const postCard = document.createElement("img");
    postCard.classList.add("mx-3");
    postCard.src = poster;

    const descriptionCard = document.createElement("p");
    descriptionCard.className = "text-center p-2";
    descriptionCard.innerText = `Publicada  en el año ${year}, dirigida por: "${director}". \n Generos:  ${genre.join(
      ", "
    )} \n Duracion: ${duration} minutos \n Se lleva la califiacion de: \n ${rate}`;

    divCard.appendChild(titleCard);
    divCard.appendChild(postCard);
    divCard.appendChild(descriptionCard);
    fragment.appendChild(divCard);

    const modal = createModal(info);
    modal.id = `modal-${index}`;
    document.body.appendChild(modal);
  });
  section.appendChild(fragment);
};
