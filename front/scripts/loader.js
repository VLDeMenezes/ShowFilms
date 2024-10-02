export const loader = () => {
  const place = document.getElementById("section");
  const div = document.createElement("div");
  div.innerHTML = `\
  <div class="progress-bar-container">
    <div class="progress-bar stripes">
      <span class="progress-bar-inner"></span>
    </div>
    
  </div>`;

  place.appendChild(div);
};
