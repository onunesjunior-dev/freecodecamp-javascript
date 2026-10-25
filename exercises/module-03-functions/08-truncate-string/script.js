/**
 * Trunca uma string caso seu comprimento exceda o limite numérico especificado,
 * anexando reticências (...) ao final.
 *
 * @param {string} str - A string original a ser avaliada.
 * @param {number} num - O comprimento máximo permitido antes do truncamento.
 * @returns {string} A string original intacta ou truncada com reticências.
 */
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}
