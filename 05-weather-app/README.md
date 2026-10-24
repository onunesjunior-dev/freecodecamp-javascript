# Weather App

Projeto 5 de 5 da certificação **JavaScript** do freeCodeCamp.

App que busca o clima atual de 6 cidades (Nova York, Los Angeles, Chicago, Paris, Tóquio,
Londres) na API do freeCodeCamp e exibe temperatura, sensação térmica, umidade, vento e
rajada de vento.

## Testes

25 de 25 asserções automatizadas: `select` com as 6 cidades + opção vazia inicial;
`getWeather` (função assíncrona, não declarada com `const` porque os testes reatribuem a
função) busca e retorna o JSON da API, tratando erro no console; `showWeather` chama
`getWeather`, mostra alerta de erro quando a resposta falha, e preenche cada elemento com
o dado certo (ou `N/A` quando o valor vem `undefined` da API).

## Como ver funcionando

Abra o `index.html` em qualquer navegador (precisa de internet pra consultar a API).

## Desafio original

https://www.freecodecamp.org/learn/javascript-v9/javascript-projects/build-a-weather-app

---
Parte do [currículo completo de JavaScript](../README.md) no freeCodeCamp.
