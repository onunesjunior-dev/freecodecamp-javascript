// 1. Operação de Adição (Arrow Function concisa):
const calculateSum = (num1, num2) => num1 + num2;
console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

// 2. Operação de Subtração (Arrow Function concisa):
const calculateDifference = (num1, num2) => num1 - num2;
console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(10, 11));

// 3. Operação de Multiplicação:
const calculateProduct = (num1, num2) => num1 * num2;
console.log(calculateProduct(13, 5));

// 4. Operação de Divisão com Cláusula de Guarda contra Divisão por Zero:
const calculateQuotient = (num1, num2) => {
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
};
console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

// 5. Operação de Exponenciação (Quadrado):
const calculateSquare = (num) => num ** 2;
console.log(calculateSquare(2));
console.log(calculateSquare(9));

// 6. Operação de Radiciação (Raiz Quadrada):
const calculateSquareRoot = (num) => Math.sqrt(num);
console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));
