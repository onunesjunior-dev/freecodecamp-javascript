// 1. Mensagens iniciais estáticas
console.log("Hi there!");
console.log("I am excited to talk to you.");

// 2. Declaração e inicialização de variáveis de estado
let bot;
bot = "teacherBot"; // Inicialização após declaração
let botLocation = "the universe"; // Declaração e inicialização em camelCase

console.log("Allow me to introduce myself.");

// 3. Concatenação com operador + e controle de espaços
let botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

let botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

// 4. Reatribuição de valor (Mutabilidade com let)
bot = "professorBot";
let nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

// 5. Segunda reatribuição de valor
bot = "awesomeTeacherBot";
let newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

// 6. Concatenação final e encerramento
let favoriteSubject = "Computer Science";
let favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);

console.log("Well, it was nice to talk to you. Have a nice day!");
