// 1. Definição do Pool de Previsões
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// 2. Geração do Inteiro Aleatório no Intervalo [1, 5] Inclusive
const randomNumber = Math.floor(Math.random() * 5) + 1;

// 3. Roteamento Condicional da Previsão Selecionada
let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

// 4. Exibição da Previsão no Console
console.log(selectedFortune);
