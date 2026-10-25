/**
 * Implementação Oficial da Busca Binária com Rastreamento de Trilha (Workshop FCC)
 * @param {Array<number>} searchList - Array ordenado de entrada
 * @param {number} value - Valor alvo procurado
 * @returns {[Array<number>, string]} Tupla com trilha de busca e mensagem formatada
 */
function binarySearch(searchList, value) {
  // 1. Array de histórico para rastrear cada ponto médio inspecionado
  const pathToTarget = [];

  // 2. Ponteiros de limites do espaço de busca
  let low = 0;
  let high = searchList.length - 1;

  // 3. Laço principal de convergência logarítmica
  while (low <= high) {
    // Cálculo do ponto médio (índice inteiro)
    const mid = Math.floor((low + high) / 2);
    const valueAtMiddle = searchList[mid];

    // Registra o valor inspecionado na trilha
    pathToTarget.push(valueAtMiddle);

    // Avaliação das três condições mutuamente exclusivas:
    if (value === valueAtMiddle) {
      // Caso 1: Alvo encontrado no ponto médio
      return [pathToTarget, `Value found at index ${mid}`];
    } else if (value > valueAtMiddle) {
      // Caso 2: Alvo reside na metade direita (descarta esquerda)
      low = mid + 1;
    } else {
      // Caso 3: Alvo reside na metade esquerda (descarta direita)
      high = mid - 1;
    }
  }

  // 4. Se low > high, o alvo inexiste na lista ordenada
  return [[], "Value not found"];
}

// Exemplos de Execução e Verificação de Rastreamento:
console.log(binarySearch([1, 2, 3, 4, 5], 3));
// Saída: [ [ 3 ], 'Value found at index 2' ]

console.log(binarySearch([1, 2, 3, 4, 5, 9], 4));
// Saída: [ [ 3, 5, 4 ], 'Value found at index 3' ]

console.log(binarySearch([1, 3, 5, 9, 14, 22], 10));
// Saída: [ [], 'Value not found' ]
