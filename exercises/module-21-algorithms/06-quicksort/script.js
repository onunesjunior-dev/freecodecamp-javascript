/**
 * Quicksort Canônico com Particionamento de 3 Vias
 * Complexidade Temporal: Médio O(n log n) | Pior O(n²) | Espaço: O(log n) na Call Stack
 * @param {number[]} array - Array de inteiros a ser ordenado
 * @returns {number[]} Novo array ordenado em ordem crescente
 */
function quicksort(array) {
  // Caso Base: Arrays de 0 ou 1 item já estão ordenados
  if (array.length <= 1) {
    return array;
  }

  // Escolha do Pivô (último elemento do array):
  const pivot = array[array.length - 1];
  const left = [];
  const equal = [];
  const right = [];

  // Particionamento linear O(n):
  for (const item of array) {
    if (item < pivot) {
      left.push(item);
    } else if (item > pivot) {
      right.push(item);
    } else {
      equal.push(item);
    }
  }

  // Combinação recursiva com spread operator:
  return [...quicksort(left), ...equal, ...quicksort(right)];
}
