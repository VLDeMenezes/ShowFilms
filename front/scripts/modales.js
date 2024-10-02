// modales.js
export const modalAlertaServidor = () => {
  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">¡Disculpe!</h5>
          </div>
          <div class="modal-body">
          <p>El servidor está con inconvenientes. Intente recargar la página o luego mas tarde.</p>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="document.location.reload()">Reiniciar</button>
          </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  const myModal = new bootstrap.Modal(modal);
  myModal.show();
  setTimeout(() => location.reload(), 9000);
};
