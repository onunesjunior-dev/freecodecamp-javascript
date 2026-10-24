# Drum Machine

Projeto 2 de 5 da certificação **JavaScript** do freeCodeCamp.

Bateria eletrônica com 9 pads (Q, W, E, A, S, D, Z, X, C), acionáveis por clique ou tecla
do teclado, cada um disparando um clipe de áudio e exibindo o nome do som no display.
Estilo visual próprio de hardware de sampler (MPC), não o template padrão do desafio.

## Testes

10 de 10 asserções automatizadas: estrutura `#drum-machine` → `#pad-bank` + `#display`;
9 `.drum-pad` (elementos `button`) na ordem certa das letras; cada pad com um `audio.clip`
filho, `id` igual à letra; áudio dispara no clique e na tecla correspondente; `#display`
mostra uma string única pra cada som acionado.

## Como ver funcionando

Abra o `index.html` em qualquer navegador (precisa de internet pra carregar os clipes de
áudio, hospedados no CDN do freeCodeCamp).

## Desafio original

https://www.freecodecamp.org/learn/javascript-v9/javascript-projects/build-a-drum-machine

---
Parte do [currículo completo de JavaScript](../README.md) no freeCodeCamp.
