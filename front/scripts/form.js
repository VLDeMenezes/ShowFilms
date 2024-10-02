export const validation = () => {
  const title = document.getElementById("inputTitle").value;
  const director = document.getElementById("inputDirector").value;
  const year = parseInt(document.getElementById("inputYear").value, 10);
  const duration = parseInt(document.getElementById("inputDuration").value, 10);
  const selectedGenres = document.querySelectorAll(".ch:checked");
  const genre = Array.from(selectedGenres).map((genre) => genre.id);
  const poster = document.getElementById("inputUrl").value;
  const rate = parseFloat(
    (document.getElementById("inputRate").value * 0.1).toFixed(1)
  );
  const postFilm = {
    title,
    director,
    year,
    duration,
    genre,
    poster,
    rate,
  };

  if (title == null || title.length == 0 || /^\s+$/.test(title)) {
    document.getElementById("basic-title").classList.remove("d-none");
    alert("Error must introduce a valid title");
    return false;
  }
  if (isNaN(year) || year < 1500 || year > 2100) {
    document.getElementById("basic-year").classList.remove("d-none");
    document.getElementById("basic-title").classList.add("d-none");
    alert("Error must introduce a valid year");
    return false;
  }
  if (director == null || director.length == 0 || /^\s+$/.test(director)) {
    document.getElementById("basic-direc").classList.remove("d-none");
    document.getElementById("basic-year").classList.add("d-none");
    alert("Error must introduce a valid Director`s name");
    return false;
  }
  if (isNaN(duration) || duration < 10 || duration > 500) {
    document.getElementById("basic-durac").classList.remove("d-none");
    document.getElementById("basic-direc").classList.add("d-none");
    alert("Error must introduce a valid duration");
    return false;
  }
  if (genre.length < 1) {
    document.getElementById("basic-genre").classList.remove("d-none");
    document.getElementById("basic-durac").classList.add("d-none");
    alert("Error, must select almost one genre");
    return false;
  }
  if (rate === 5) {
    document.getElementById("basic-rate").classList.remove("d-none");
    document.getElementById("basic-genre").classList.add("d-none");
    alert("Error, must select put a rate");
    return false;
  }

  if (!poster) {
    document.getElementById("basic-url").classList.remove("d-none");
    document.getElementById("basic-rate").classList.add("d-none");
    alert("Error must introduce a valid poster url");
  } else {
    sendNewFilm(postFilm);
    return true;
  }
};

const sendNewFilm = async (data, err) => {
  try {
    const response = await axios.post("http://localhost:3000/movies", data);

    alert("Pelicula creada correctamente");
  } catch (error) {
    console.error("Error al enviar la película:", error);
    alert("Error al crear la película. Por favor, inténtelo de nuevo.");
  }
};

export const resetForm = () => {
  const smalls = document.querySelectorAll("div.form-text").forEach((small) => {
    small.classList.add("d-none");
  });

  const resetCheckbox = () => {
    const checkboxes = document
      .querySelectorAll("input[type=checkbox]")
      .forEach((check) => (check.checked = false));
    console.log(checkboxes);
  };
  resetCheckbox();

  const inputs = document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
};
