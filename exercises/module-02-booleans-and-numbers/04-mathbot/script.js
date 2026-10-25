// Passo 1: Inicialização e Apresentação do Bot
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
console.log(greeting);

// Passos 2 e 3: Aleatoriedade Básica de Ponto Flutuante [0, 1)
console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");
const randomNum = Math.random();
console.log(randomNum);

// Passos 4 e 5: Geração de Ponto Flutuante em Intervalo Definido [min, max)
console.log("Now, generate a random number between two values.");
const min = 1;
const max = 100;
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

// Passos 6 e 7: Truncamento para Baixo (Piso / Floor)
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown); // 6

// Passos 8 e 9: Geração de Inteiro Discreto em Intervalo Definido
console.log("Now, generate a random integer between two values.");
const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

// Passos 10 e 11: Arredondamento para Cima (Teto / Ceil)
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");
const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp); // 4

// Passos 12 e 13: Arredondamento Aritmético Padrão (Round)
console.log("The Math.round() method rounds the value to the nearest whole integer.");
const numRounded = Math.round(2.7);
console.log(numRounded); // 3
const numRounded2 = Math.round(11.2);
console.log(numRounded2); // 11

// Passos 14 e 15: Análise de Limites Extremos (Max e Min)
console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");
const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum); // 125
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum); // 2

// Passo 16: Conclusão do Workshop
console.log("It was fun learning about the different Math methods with you!");
