export const createModal = ({
  title,
  poster,
  year,
  director,
  genre,
  duration,
  rate,
}) => {
  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.innerHTML = `
    <div class="modal-dialog max-width-modal">
      <div class="modal-content" >
        <div class="modal-header text-bg-secondary">
          <h3 class="modal-title ">${title}</h3>
          <button type="button" class="btn-close bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center" >
          <img src="${poster}" class="img-fluid mb-3 img-thumbnail" alt="Poster">
          <p class="text-center"> Publicada en el año ${year}, dirigida por: "${director}".</p>
          <p class="text-center">Géneros: ${genre.join(", ")}</p>
          <p class="text-center">Duración: ${duration}</p>
          <p class="text-center">Calificación: ${rate}</p>
        </div>
      </div>
    </div>
  `;
  return modal;
};
