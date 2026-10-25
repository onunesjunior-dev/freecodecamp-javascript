/**
 * Algoritmo de Caminho Mais Curto de Dijkstra em Matriz de Adjacência
 * @param {number[][]} matrix - Matriz 2D de adjacência com pesos das arestas
 * @param {number} startNode - Vértice de origem
 * @param {number|null} targetNode - Vértice de destino opcional (null para todos)
 * @returns {[number[], number[][]]} - Tupla com array de distâncias mínimas e array de rotas
 */
const INF = Infinity;
const adjMatrix = [
  [0, 5, 3, INF, 11, INF],
  [5, 0, 1, INF, INF, 2],
  [3, 1, 0, 1, 5, INF],
  [INF, INF, 1, 0, 9, 3],
  [11, INF, 5, 9, 0, INF],
  [INF, 2, INF, 3, INF, 0]
];

function shortestPath(matrix, startNode, targetNode = null) {
  const n = matrix.length;
  const distances = new Array(n).fill(INF);
  distances[startNode] = 0;
  const paths = Array.from({ length: n }, (_, i) => [i]);
  const visited = new Array(n).fill(false);

  // Laço principal: itera n vezes para consolidar cada vértice
  for (let i = 0; i < n; i++) {
    let minDistance = INF;
    let current = -1;

    // Escolha Gulosa: busca o vértice não visitado mais próximo
    for (let nodeNo = 0; nodeNo < n; nodeNo++) {
      if (!visited[nodeNo] && distances[nodeNo] < minDistance) {
        minDistance = distances[nodeNo];
        current = nodeNo;
      }
    }

    // Se todos os nós alcançáveis foram processados, interrompe
    if (current === -1) {
      break;
    }

    visited[current] = true;

    // Relaxamento de arestas para os vizinhos de current
    for (let nodeNo = 0; nodeNo < n; nodeNo++) {
      const distance = matrix[current][nodeNo];

      if (distance !== INF && !visited[nodeNo]) {
        const newDistance = distances[current] + distance;

        if (newDistance < distances[nodeNo]) {
          distances[nodeNo] = newDistance;
          paths[nodeNo] = [...paths[current], nodeNo];
        }
      }
    }
  }

  // Determina se exibe apenas um destino ou todos
  const targets = targetNode !== null ? [targetNode] : [...Array(n).keys()];

  for (const nodeNo of targets) {
    if (nodeNo === startNode || distances[nodeNo] === INF) {
      continue;
    }

    const path = paths[nodeNo].join(' -> ');
    console.log(`\n${startNode}-${nodeNo} distance: ${distances[nodeNo]}\nPath: ${path}`);
  }

  return [distances, paths];
}

// Execução de teste:
shortestPath(adjMatrix, 0, 5);
