const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let md = markdownInput.value;

  // 1. Títulos h1, h2 e h3 no início da linha
  md = md.replace(/^[ ]*### (.*)$/gm, "<h3>$1</h3>");
  md = md.replace(/^[ ]*## (.*)$/gm, "<h2>$1</h2>");
  md = md.replace(/^[ ]*# (.*)$/gm, "<h1>$1</h1>");

  // 2. Citações (blockquotes) no início da linha
  md = md.replace(/^[ ]*> (.*)$/gm, "<blockquote>$1</blockquote>");

  // 3. Imagens: ![alt](src) - deve rodar antes dos links
  md = md.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // 4. Links: [texto](url)
  md = md.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // 5. Negrito: **texto** ou __texto__ (com lookahead para preservar itálicos aninhados)
  md = md.replace(/\*\*(.+?)\*\*(?!\*)/g, "<strong>$1</strong>");
  md = md.replace(/__(.+?)__(?!_)/g, "<strong>$1</strong>");

  // 6. Itálico: *texto* ou _texto_
  md = md.replace(/\*(.+?)\*/g, "<em>$1</em>");
  md = md.replace(/_(.+?)_/g, "<em>$1</em>");

  // 7. Normalização de quebras de linha
  md = md.replace(/\n/g, "");

  return md;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();
  htmlOutput.innerText = html;
  preview.innerHTML = html;
});
