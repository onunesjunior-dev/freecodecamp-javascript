const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // 1. Reset de todas as abas para não selecionadas
    tabs.forEach(t => {
      t.setAttribute("aria-selected", "false");
    });

    // 2. Ocultação de todos os painéis de conteúdo
    panels.forEach(panel => {
      panel.hidden = true;
    });

    // 3. Ativação semântica da aba clicada
    tab.setAttribute("aria-selected", "true");

    // 4. Associação dinâmica via aria-controls e exibição do painel
    const associatedPanel = tab.getAttribute("aria-controls");
    const panel = document.getElementById(associatedPanel);
    panel.hidden = false;
  });
});
