/**
 * Substitui uma palavra na string preservando o padrão de caixa alta/baixa do termo original.
 * @param {string} str
 * @param {string} before
 * @param {string} after
 * @returns {string}
 */
function myReplace(str, before, after) {
  // Verifica se a primeira letra da palavra original era maiúscula
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  // Executa a substituição precisa na string
  return str.replace(before, after);
}
