/**
 * Realiza a travessia DFS a partir de um vértice raiz em uma matriz de adjacência
 * @param {number[][]} graph - Matriz de adjacência 2D
 * @param {number} root - Vértice inicial
 * @returns {number[]} - Array contendo todos os vértices alcançáveis
 */
function dfs(graph, root) {
  const stack = [root];
  const visited = new Set();
  const reachableNodes = [];

  while (stack.length > 0) {
    const current = stack.pop();

    if (!visited.has(current)) {
      visited.add(current);
      reachableNodes.push(current);

      for (let neighbor = 0; neighbor < graph[current].length; neighbor++) {
        if (graph[current][neighbor] === 1 && !visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return reachableNodes;
}
