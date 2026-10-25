/**
 * Implementação Oficial do Merge Sort (Workshop FCC — 25 Passos)
 * Complexidade Temporal: O(n log n) em todos os casos | Espacial: O(n)
 * @param {number[]} array - Array mutado in-place
 */
function mergeSort(array) {
  // 1. Caso Base da Recursão (Passo 20):
  if (array.length <= 1) {
    return;
  }

  // 2. Fase de Divisão (Passos 2 a 4):
  const middlePoint = Math.floor(array.length / 2);
  const leftPart = array.slice(0, middlePoint);
  const rightPart = array.slice(middlePoint);

  // 3. Chamadas Recursivas (Passos 5 e 6):
  mergeSort(leftPart);
  mergeSort(rightPart);

  // 4. Inicialização dos 3 Ponteiros (Passo 7):
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  let sortedIndex = 0;

  // 5. Laço Principal de Comparação e Mesclagem (Passos 8 a 14):
  while (leftArrayIndex < leftPart.length && rightArrayIndex < rightPart.length) {
    if (leftPart[leftArrayIndex] < rightPart[rightArrayIndex]) {
      array[sortedIndex] = leftPart[leftArrayIndex];
      leftArrayIndex += 1;
    } else {
      array[sortedIndex] = rightPart[rightArrayIndex];
      rightArrayIndex += 1;
    }
    sortedIndex += 1;
  }

  // 6. Drenagem dos Elementos Remanescentes da Esquerda (Passos 15 a 18):
  while (leftArrayIndex < leftPart.length) {
    array[sortedIndex] = leftPart[leftArrayIndex];
    leftArrayIndex += 1;
    sortedIndex += 1;
  }

  // 7. Drenagem dos Elementos Remanescentes da Direita (Passo 19):
  while (rightArrayIndex < rightPart.length) {
    array[sortedIndex] = rightPart[rightArrayIndex];
    rightArrayIndex += 1;
    sortedIndex += 1;
  }
}

// Validação e Execução Oficial (Passos 21 a 25):
const numbers = [4, 10, 6, 14, 2, 1, 8, 5];
console.log("Unsorted array: ");
console.log(numbers);
mergeSort(numbers);
console.log("Sorted array: ");
console.log(numbers);
// Saída ordenada: [1, 2, 4, 5, 6, 8, 10, 14]
