const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");

let currentContent = "";

// 1. Inicialização Segura no Ciclo de Vida
window.addEventListener("DOMContentLoaded", () => {
  currentContent = noteEl.textContent;
});

// 2. Persistência e Notificação na Perda de Foco (blur)
noteEl.addEventListener("blur", () => {
  const newContent = noteEl.innerHTML;

  // Cláusula de guarda para evitar falsos salvamentos
  if (currentContent === newContent) {
    return;
  }

  currentContent = newContent;
  console.log(currentContent);
  statusEl.textContent = "Note saved successfully!";
});

// 3. Limpeza da Live Region no Retorno do Foco (focus)
noteEl.addEventListener("focus", () => {
  statusEl.textContent = "";
});
