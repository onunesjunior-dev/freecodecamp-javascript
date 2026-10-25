// Observação: a função opera sobre um array `contacts` (fixture de testes padrão
// do freeCodeCamp) fornecido externamente pela suíte de testes, não incluído
// no caderno de estudo.
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
