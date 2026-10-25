/**
 * Verifica se um determinado valor recebido é um tipo primitivo booleano.
 *
 * @param {*} bool - O valor ou referência a ser inspecionado.
 * @returns {boolean} Retorna true se for estritamente um primitivo booleano; false para qualquer outro tipo.
 */
function booWho(bool) {
  return typeof bool === "boolean";
}
