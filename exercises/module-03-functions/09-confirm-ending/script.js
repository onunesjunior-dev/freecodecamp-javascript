/**
 * Verifica se uma string termina com a sequência de caracteres fornecida
 * sem utilizar o método nativo String.prototype.endsWith.
 *
 * @param {string} str - A string completa de entrada.
 * @param {string} target - O sufixo esperado.
 * @returns {boolean} Retorna true se str termina exatamente com target; caso contrário, false.
 */
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
