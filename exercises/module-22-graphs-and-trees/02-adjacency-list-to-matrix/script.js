const adjList = {
  0: [1, 2], // 0 conecta em 1 e 2
  1: [2],    // 1 conecta em 2
  2: [0, 3], // 2 conecta em 0 e 3
  3: [2]     // 3 conecta em 2
};

/**
 * Converte uma Lista de Adjacência em Matriz de Adjacência Binária 2D
 * @param {Record<string|number, number[]>} adjList - Objeto representando o grafo
 * @returns {number[][]} - Matriz bidimensional de adjacência (V x V)
 */
function adjacencyListToMatrix(adjList) {
  const n = Object.keys(adjList).length;

  // Alocação independente de linhas para evitar aliasing de referências na RAM:
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0));

  // Varredura linear das arestas existentes:
  for (const node in adjList) {
    const u = Number(node);
    for (const v of adjList[node]) {
      matrix[u][v] = 1;
    }
  }

  // Exibição linha por linha no console:
  for (const row of matrix) {
    console.log(row);
  }

  return matrix;
}
