/**
 * Determina se um determinado ano é bissexto no calendário gregoriano.
 *
 * @param {number} year - O ano a ser testado.
 * @returns {string} Frase indicando se o ano é ou não bissexto.
 */
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// Escopo externo e execução com armazenamento em variável:
let year = 2024;
let result = isLeapYear(year);
console.log(result);
