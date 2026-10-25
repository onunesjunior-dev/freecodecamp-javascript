/**
 * Insertion Sort Canônico
 * Complexidade Temporal: Melhor O(n) | Médio/Pior O(n²) | Espaço: O(1) In-Place & Estável
 * @param {number[]} array - Array de inteiros a ser ordenado
 * @returns {number[]} O próprio array ordenado
 */
function insertionSort(array) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    const currentValue = array[i];
    let j = i - 1;

    // Desloca elementos maiores uma posição à frente:
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }

    // Encaixa o valor na lacuna aberta:
    array[j + 1] = currentValue;
  }

  return array;
}
