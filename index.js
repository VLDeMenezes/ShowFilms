window.addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", window.scrollY > 0);
});

function recorrer() {
  tempData.forEach((pelicula) => {
    display(pelicula);
  });
}
function display(pelicula) {
  //seleccion de valores
  const conteiner = document.getElementById("section");
  const { title, year, director, duration, genre, rate, poster } = pelicula;

  //creacion de elementos
  const EdivCard = document.createElement("div");
  const Etitle = document.createElement("h3");
  const Eimg = document.createElement("img");
  const Edescription = document.createElement("p");
  const Erate = document.createElement("div");
  Etitle.innerText = title;
  Eimg.src = poster;
  Edescription.innerText = `Dirigida por ${director}, del genero ${genre}, publicada en el a;o ${year}, con una duracion de ${duration}, y una calificacion de:`;
  Erate.classList.add("rate");
  Erate.innerText = rate;
  EdivCard.appendChild(Etitle);
  EdivCard.appendChild(Eimg);
  EdivCard.appendChild(Edescription);
  EdivCard.appendChild(Erate);
  EdivCard.classList.add("card");

  conteiner.appendChild(EdivCard);
}

recorrer();
