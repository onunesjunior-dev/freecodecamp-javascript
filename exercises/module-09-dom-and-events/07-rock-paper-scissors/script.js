// 1. Definição das Opções Válidas
const options = ["Rock", "Paper", "Scissors"];

// 2. Gerador Pseudoaleatório de Escolha da CPU
function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// 3. Matriz de Decisão de Vitória do Jogador
function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

// 4. Estado Mutável do Jogo
let playerScore = 0;
let computerScore = 0;

// 5. Função de Cálculo do Resultado da Rodada com Efeitos Colaterais
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

// 6. Cache de Elementos do DOM
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// 7. Atualização Visual e Verificação de Fim de Jogo
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  if (playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  } else if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

// 8. Reinicialização Atômica da Partida
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

// 9. Registro de Ouvintes dos Botões de Ação
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", () => {
  showResults("Rock");
});

paperBtn.addEventListener("click", () => {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", () => {
  showResults("Scissors");
});
