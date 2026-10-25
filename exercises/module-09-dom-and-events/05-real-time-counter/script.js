// 1. Cache de Referências dos Nós do DOM
const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");

// 2. Escuta Contínua de Entrada de Texto
textInput.addEventListener("input", () => {
  // Truncamento defensivo para limitar a 50 caracteres
  if (textInput.value.length >= 50) {
    textInput.value = textInput.value.slice(0, 50);
    charCount.style.color = "red";
  } else {
    charCount.style.color = "";
  }

  // Atualização segura do nó de contagem
  charCount.textContent = `Character Count: ${textInput.value.length}/50`;
});
