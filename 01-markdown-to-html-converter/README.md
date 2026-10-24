# Markdown to HTML Converter

Projeto 1 de 5 da certificação **JavaScript** do freeCodeCamp.

Conversor de Markdown para HTML em tempo real: títulos (`#`/`##`/`###`), negrito
(`**`/`__`), itálico (`*`/`_`), imagens, links e citações (`>`), tudo via regex,
atualizando a cada evento `input` no textarea.

## Testes

51 de 51 asserções automatizadas: cada construção de Markdown (título, negrito, itálico,
imagem, link, citação) precisa converter pro elemento HTML certo, tanto na saída bruta
(`#html-output`) quanto no preview renderizado (`#preview`) — incluindo múltiplas linhas,
elementos aninhados (`**bold with *italic* inside**`) e o caso de não converter `#`/`>`
quando não estão no início da linha.

## Como ver funcionando

Abra o `index.html` em qualquer navegador — HTML, CSS e JS puros, sem dependência.

## Desafio original

https://www.freecodecamp.org/learn/javascript-v9/javascript-projects/build-a-markdown-to-html-converter

---
Parte do [currículo completo de JavaScript](../README.md) no freeCodeCamp.
