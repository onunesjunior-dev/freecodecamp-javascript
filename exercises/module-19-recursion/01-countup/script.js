function countup(number) {
  if (number < 1) {
    return []; // Caso Base: Retorna array vazio inicial
  } else {
    const countArray = countup(number - 1); // Pausa e espera a chamada menor
    countArray.push(number);                // Insere no fim do array na volta
    return countArray;                      // Retorna o array enriquecido
  }
}
