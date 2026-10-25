// ============================================================================
// WORKSHOP: MOTOR HEURÍSTICO DE FILTRAGEM ANTI-SPAM (32 PASSOS)
// ============================================================================

const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

// 1. Regex para pedidos de socorro falsos
const helpRegex = /please help|assist me/i;

// 2. Regex para ofertas financeiras com quantias exorbitantes
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;

// 3. Regex para iscas de 'free money' com ofuscação leetspeak
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/i;

// 4. Regex para esquemas de 'stock alert' (pump and dump)
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:\s|$)/i;

// 5. Regex para saudações falsas de 'dear friend' (golpe nigeriano)
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:\s|$)/i;

// Lista de regras bloqueadas
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

/**
 * Avalia se o texto fornecido aciona qualquer uma das regras da denyList.
 * @param {string} msg
 * @returns {boolean}
 */
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

// Event Listener para disparo no DOM
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";

  messageInput.value = "";
});
