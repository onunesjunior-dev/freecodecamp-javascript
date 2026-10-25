const themes = [
  {
    name: "light",
    message: "Light theme has been applied.",
  },
  {
    name: "dark",
    message: "Dark theme has been applied.",
  },
];

// 1. Cache de Elementos do DOM
const themeButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const statusElement = document.querySelector('[aria-live="polite"]');
const menuItems = document.querySelectorAll('[role="menuitem"]');

// 2. Alternância do Menu Dropdown com Sincronização ARIA
themeButton.addEventListener("click", () => {
  const isHidden = themeDropdown.hasAttribute("hidden");

  if (isHidden) {
    themeDropdown.removeAttribute("hidden");
    themeButton.setAttribute("aria-expanded", "true");
  } else {
    themeDropdown.setAttribute("hidden", "");
    themeButton.setAttribute("aria-expanded", "false");
  }
});

// 3. Seleção de Tema e Notificação na Live Region
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedThemeName = item.textContent.trim().toLowerCase();
    const themeObj = themes.find((t) => t.name === selectedThemeName);

    if (themeObj) {
      // Limpeza de classes de temas anteriores no <body>
      themes.forEach((t) => {
        document.body.classList.remove(`theme-${t.name}`);
      });

      // Adição da nova classe temática
      document.body.classList.add(`theme-${themeObj.name}`);

      // Notificação acessível em tempo real
      statusElement.textContent = themeObj.message;

      // Fechamento do menu dropdown
      themeDropdown.setAttribute("hidden", "");
      themeButton.setAttribute("aria-expanded", "false");
    }
  });
});
