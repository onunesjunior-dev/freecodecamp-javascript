// 1. Seleção de todos os botões de favoritos
const favoriteButtons = document.querySelectorAll(".favorite-icon");

// 2. Iteração em lote e alternância de estado reativo
favoriteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("filled")) {
      btn.classList.remove("filled");
      btn.innerHTML = "&#9825;";
    } else {
      btn.classList.add("filled");
      btn.innerHTML = "&#10084;";
    }
  });
});
