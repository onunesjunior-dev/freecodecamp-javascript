/**
 * Calcula o n-ésimo número de Fibonacci usando Programação Dinâmica (Tabulação)
 * @param {number} n - Inteiro não-negativo
 * @returns {number} - O n-ésimo número de Fibonacci
 */
function fibonacci(n) {
  // Casos base pré-alocados na tabela:
  const sequence = [0, 1];

  // Preenchimento iterativo de baixo para cima:
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence[n];
}
