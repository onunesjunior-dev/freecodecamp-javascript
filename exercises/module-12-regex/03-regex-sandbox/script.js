const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
}

testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const flags = getFlags();

  // Compilação dinâmica segura via construtor RegExp
  const regex = new RegExp(pattern, flags);
  const text = stringToTest.innerHTML;
  const matches = text.match(regex);

  if (matches) {
    // Substituição com callback para envelopar cada ocorrência casada
    stringToTest.innerHTML = text.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`
    );
    testResult.textContent = matches.join(", ");
  } else {
    testResult.textContent = "no match";
  }
});
