import { generateCards } from "./generateCards.js";
import { modalAlertaServidor } from "./modales.js";
import { loader } from "./loader.js";
import { search } from "./search.js";
import { validation, resetForm } from "./form.js";

const section = document.getElementById("section");
const forms = document.getElementById("form");
const btnForm = document.getElementById("submitBttn");
const searchInput = document.getElementById("searchNav");
const resetBttn = document.getElementById("resetForm");

const fetchData = async (data, err) => {
  try {
    loader();
    const response = await axios.get("http://localhost:3000/movies");
    const apiData = response.data;
    if (apiData.length === 0) {
      modalAlertaServidor;
    } else {
      generateCards(apiData);
    }
  } catch {
    modalAlertaServidor();
  }
};

//llamado de datos y ejecucion de funciones
if (section) {
  fetchData();
}
if (forms) {
  btnForm.addEventListener("click", validation);
  resetBttn.addEventListener("click", resetForm);
} else {
  searchInput.addEventListener("keyup", search);
}

//cosas a resolver>

//> reiniciar vuelve a hacer la peticion?
