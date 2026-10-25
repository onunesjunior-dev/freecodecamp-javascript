const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

// 1. Cache dos Elementos do DOM
const teamSpan = document.getElementById("team");
const yearSpan = document.getElementById("year");
const headCoachSpan = document.getElementById("head-coach");
const playersDropdown = document.getElementById("players");
const playerCardsContainer = document.getElementById("player-cards");

// 2. Preenchimento das Estatísticas Gerais do Time
teamSpan.textContent = footballTeam.team;
yearSpan.textContent = footballTeam.year;
headCoachSpan.textContent = footballTeam.headCoach;

// 3. Função Declarativa de Renderização dos Cartões
const setPlayerCards = (arr = footballTeam.players) => {
  playerCardsContainer.innerHTML = arr
    .map(
      ({ name, position, isCaptain }) => `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
          <p>Position: ${position}</p>
        </div>
      `
    )
    .join("");
};

// 4. Renderização Inicial (Todos os Jogadores)
setPlayerCards();

// 5. Filtro Reativo com Ouvinte de Evento 'change'
playersDropdown.addEventListener("change", (e) => {
  playerCardsContainer.innerHTML = "";

  switch (e.target.value) {
    case "forward":
      setPlayerCards(
        footballTeam.players.filter((player) => player.position === "forward")
      );
      break;
    case "midfielder":
      setPlayerCards(
        footballTeam.players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        footballTeam.players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        footballTeam.players.filter((player) => player.position === "goalkeeper")
      );
      break;
    default:
      setPlayerCards();
      break;
  }
});
