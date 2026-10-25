// 1. Função Genérica e Reutilizável de Mutação de Estado
function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];

  // Cláusula de guarda: limite máximo de 10 reações
  if (currCount === 10) return;

  currCount++;
  countEl.textContent = `${currCount}/10`;
}

// 2. Seleção em Lote com NodeList
const btns = document.querySelectorAll(".emoji-btn");

// 3. Iteração Declarativa e Registro de Ouvintes com Closures
btns.forEach((btn) => {
  btn.addEventListener("click", () => updateCount(btn));
});
