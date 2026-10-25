// 1. Cache de Referências dos Nós do DOM
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

// 2. Abertura do Lightbox com a imagem em tamanho real
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImage.src = item.src.replace("-thumbnail", "");
  });
});

// 3. Fechamento pelo botão X
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// 4. Fechamento ao clicar no backdrop do modal
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
