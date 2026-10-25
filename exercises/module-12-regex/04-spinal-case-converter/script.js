/**
 * Converte qualquer formato de texto composto para spinal-case (kebab-case).
 * @param {string} str
 * @returns {string}
 */
function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Separa minúscula seguida imediatamente de maiúscula
    .replace(/[\s_]+/g, "-")              // Converte 1 ou mais espaços/underscores em hífen único
    .toLowerCase();                       // Converte todas as letras em caixa baixa
}
