/**
 * Calcula a soma de todos os números primos menores ou iguais a num
 * @param {number} num - Limite superior
 * @returns {number} - Soma dos primos encontrados
 */
function sumPrimes(num) {
  if (num < 2) {
    return 0;
  }

  // 1. Tabela booleana pré-alocada (índices representam os números):
  const isPrime = new Array(num + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  // 2. Crivo com poda até sqrt(num):
  for (let i = 2; i * i <= num; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // 3. Acumulação linear dos números primos sobreviventes:
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime[i]) {
      sum += i;
    }
  }

  return sum;
}
