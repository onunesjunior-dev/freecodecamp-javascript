function addTogether(...args) {
  const [first, second] = args;

  // Validação estrita do primeiro argumento
  if (typeof first !== 'number') {
    return undefined;
  }

  // Caso 1: Apenas 1 argumento fornecido -> Retorna closure com aplicação parcial
  if (args.length === 1) {
    return function (second) {
      if (typeof second !== 'number') {
        return undefined;
      }
      return first + second;
    };
  }

  // Caso 2: Dois argumentos fornecidos -> Valida segundo argumento
  if (typeof second !== 'number') {
    return undefined;
  }

  return first + second;
}
