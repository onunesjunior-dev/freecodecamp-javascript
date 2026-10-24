# Voting App

Projeto 3 de 5 da certificação **JavaScript** do freeCodeCamp.

Sistema de votação usando `Map` pra guardar as opções da enquete e `Set` pra cada opção
rastrear os eleitores que já votaram (evita voto duplicado).

## Testes

18 de 18 asserções automatizadas: `poll` como `Map`; `addOption` adiciona opção nova (com
`Set` vazio), rejeita opção vazia, rejeita opção duplicada; `vote` rejeita opção
inexistente, rejeita voto duplicado do mesmo eleitor, registra voto novo; `displayResults`
retorna o relatório formatado (`"Poll Results:\nOption: N votes"` por linha).

## Como ver funcionando

O arquivo já vem com uma carga inicial de exemplo (3 opções, 3 votos) no final — é assim
que os testes do freeCodeCamp verificam o estado da enquete, sem imprimir nada no
terminal. Pra ver o resultado você mesmo, abra um terminal Node interativo:

```bash
node -i -e "$(cat script.js)"
> displayResults()
```

## Desafio original

https://www.freecodecamp.org/learn/javascript-v9/javascript-projects/build-a-voting-app

---
Parte do [currículo completo de JavaScript](../README.md) no freeCodeCamp.
