const searchInput = document.getElementById("searchNav");
// Función para realizar el filtrado
export const search = () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
};
