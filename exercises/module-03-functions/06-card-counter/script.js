// 1. Variável de estado global inicializada com let:
let count = 0;

/**
 * Atualiza o contador de cartas do Blackjack e emite a recomendação de aposta.
 *
 * @param {number|string} card - A carta revelada na rodada.
 * @returns {string} String formatada com a contagem atual e a recomendação (Bet ou Hold).
 */
function cardCounter(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  return count > 0 ? `${count} Bet` : `${count} Hold`;
}
