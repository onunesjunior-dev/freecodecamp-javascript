/**
 * Traduz palavras em inglês para a convenção fonética Pig Latin.
 * @param {string} str
 * @returns {string}
 */
function translatePigLatin(str) {
  // Caso 1: Palavra iniciada por vogal
  if (/^[aeiou]/.test(str)) {
    return str + "way";
  }

  // Caso 2: Palavra sem nenhuma vogal
  if (!/[aeiou]/.test(str)) {
    return str + "ay";
  }

  // Caso 3: Palavra iniciada por cluster consonantal
  // $1 captura todas as consoantes iniciais até a primeira vogal
  // $2 captura todo o restante da palavra até o fim
  return str.replace(/^([^aeiou]+)(.*)$/, "$2$1ay");
}
