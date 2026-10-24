// 1. Inicialização da Enquete com Map
const poll = new Map();

// 2. Adição de Opções na Enquete
function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// 3. Mecanismo de Votação Blindado contra Duplicatas
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// 4. Renderização do Relatório Formatado
function displayResults() {
  let result = "Poll Results:";
  poll.forEach((voters, option) => {
    result += `\n${option}: ${voters.size} votes`;
  });
  return result;
}

// 5. Carga Inicial: Pelo menos 3 opções e 3 votos (User Stories)
addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");
