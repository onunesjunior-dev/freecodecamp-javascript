// 1. Cache de Referências do DOM
const storyContainer = document.querySelector(".story-container");
const scaryStoryBtn = document.querySelector("#scary-btn");
const funnyStoryBtn = document.querySelector("#funny-btn");
const adventureStoryBtn = document.querySelector("#adventure-btn");
const resultParagraph = document.querySelector("#result");

// 2. Dicionário de Dados (Data-Driven Model)
const storyObj = {
  scary: {
    story: "In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.",
    borderColor: "#ee4b2b"
  },
  funny: {
    story: "During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.",
    borderColor: "#f1be32"
  },
  adventure: {
    story: "Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.",
    borderColor: "#acd157"
  }
};

// 3. Função de Manipulação e Renderização Segura
function displayStory(genre) {
  if (storyObj[genre]) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

// 4. Registro de Ouvintes de Evento com Arrow Functions (Closures)
scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));
