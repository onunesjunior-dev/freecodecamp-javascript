/**
 * Gera todas as combinações válidas de parênteses usando Busca em Largura (BFS)
 * @param {number} pairs - Número de pares de parênteses
 * @returns {string[]|string} - Lista de combinações válidas ou mensagem de erro de validação
 */
function genParentheses(pairs) {
  // 1. Cláusulas de guarda para validação de entrada:
  if (!Number.isInteger(pairs)) {
    return 'The number of pairs should be an integer';
  }
  if (pairs < 1) {
    return 'The number of pairs should be at least 1';
  }

  // 2. Inicialização da Fila FIFO e acumulador de resultados:
  let queue = [['', 0, 0]];
  let result = [];

  // 3. Laço principal da BFS explorando estados nível por nível:
  while (queue.length > 0) {
    let [current, opensUsed, closesUsed] = queue.shift();

    // Condição de parada (nó folha completo):
    if (current.length === 2 * pairs) {
      result.push(current);
    } else {
      // Ramificação 1: Adicionar parêntese de abertura
      if (opensUsed < pairs) {
        queue.push([current + '(', opensUsed + 1, closesUsed]);
      }
      // Ramificação 2: Adicionar parêntese de fechamento
      if (closesUsed < opensUsed) {
        queue.push([current + ')', opensUsed, closesUsed + 1]);
      }
    }
  }

  return result;
}

// Execução com 3 pares (gera 5 combinações):
console.log(genParentheses(3));
// Saída: ['((()))', '(()())', '(())()', '()(())', '()()()']
