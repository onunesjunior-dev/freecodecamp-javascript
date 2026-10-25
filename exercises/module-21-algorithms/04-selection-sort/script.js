/**
 * Selection Sort Canônico
 * Complexidade Temporal: O(n²) em todos os casos | Espaço: O(1) In-Place
 * @param {number[]} array - Array a ser ordenado
 * @returns {number[]} O próprio array ordenado
 */
function selectionSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Localiza o menor elemento na porção não-ordenada [i+1 .. n-1]:
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Realiza a troca única se minIndex mudou:
    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}
