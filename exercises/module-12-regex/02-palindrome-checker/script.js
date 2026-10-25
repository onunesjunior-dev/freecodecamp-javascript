const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const originalText = textInput.value;

  if (!originalText) {
    alert("Please input a value");
    return;
  }

  // Normalização via regex: remove tudo que NÃO for letra (a-z) ou dígito (0-9)
  const cleanText = originalText.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedText = cleanText.split("").reverse().join("");

  if (cleanText === reversedText) {
    result.textContent = `${originalText} is a palindrome`;
  } else {
    result.textContent = `${originalText} is not a palindrome`;
  }
});
