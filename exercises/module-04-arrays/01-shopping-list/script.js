console.log("Grocery shopping list");

// 1. Inicialização do Array
const shoppingList = [];

// 2. Inserção simples no fim
console.log("It will be nice to have some fruit to eat.");
shoppingList.push("Apples");

// 3. Função formatadora utilitária
function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList)); // Current Shopping List: Apples

// 4. Inserção adicional no fim
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList)); // Current Shopping List: Apples,Grapes

// 5. Inserção no início da fila
console.log("It looks like we need to get some cooking oil.");
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList)); // Current Shopping List: Vegetable Oil,Apples,Grapes

// 6. Inserção múltipla na cauda (preservando ordem dos argumentos)
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));
// Current Shopping List: Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky,Potato Chips

// 7. Remoção da cauda (pop)
console.log("This looks like too much junk food.");
shoppingList.pop(); // Remove "Potato Chips"
console.log(getShoppingListMsg(shoppingList));

// 8. Inserção de sobremesa no início
console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

// 9. Remoção da cabeça (shift)
console.log("On second thought, maybe we should be more health conscious.");
shoppingList.shift(); // Remove "Chocolate Cake"

// 10. Mutação in-place por índice
shoppingList[0] = "Canola Oil";
console.log(getShoppingListMsg(shoppingList));
// Current Shopping List: Canola Oil,Apples,Grapes,Popcorn,Beef Jerky
