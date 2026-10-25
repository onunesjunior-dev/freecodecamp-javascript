/**
 * Mascara a porção de usuário de um e-mail mantendo o primeiro caractere,
 * o último caractere e preenchendo o intervalo com asteriscos.
 *
 * @param {string} email - O endereço de e-mail completo.
 * @returns {string} O e-mail formatado e protegido contra vazamento de PII.
 */
function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = username[0];
  const lastChar = username.slice(-1);
  const maskedMiddle = "*".repeat(username.length - 2);

  return firstChar + maskedMiddle + lastChar + domain;
}

// Declaração de escopo externo e chamada com log para validação dos testes:
let email = "apple.pie@example.com";
console.log(maskEmail(email));
