/**
 * Bubble Sort Canônico e Otimizado
 * Complexidade Temporal: Melhor O(n) | Médio/Pior O(n²) | Espaço: O(1) In-Place
 * @param {number[]} array - Array de inteiros a ser ordenado
 * @returns {number[]} O próprio array ordenado
 */
function bubbleSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Troca in-place:
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }

    // Se não houve trocas, o array já está ordenado:
    if (!swapped) {
      break;
    }
  }

  return array;
}
