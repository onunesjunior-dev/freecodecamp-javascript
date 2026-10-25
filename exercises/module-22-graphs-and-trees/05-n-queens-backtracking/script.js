/**
 * Resolvedor do Problema das N-Rainhas via DFS com Backtracking e Poda Geométrica O(1)
 * @param {number} n - Dimensão do tabuleiro (NxN) e número de rainhas
 * @returns {number[][]} - Lista de todas as configurações válidas encontradas
 */
function dfsNQueens(n) {
  if (n < 1) {
    return [];
  }

  const results = [];
  const cols = new Set();
  const diag1 = new Set(); // Diagonais principais: row - col
  const diag2 = new Set(); // Diagonais secundárias: row + col

  function backtrack(row, current) {
    // Base de Sucesso: todas as n rainhas foram posicionadas com sucesso
    if (row === n) {
      results.push([...current]);
      return;
    }

    for (let col = 0; col < n; col++) {
      const d1 = row - col;
      const d2 = row + col;

      // Poda em O(1): se houver ataque iminente, descarta este ramo
      if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) {
        continue;
      }

      // 1. FAZER A ESCOLHA:
      cols.add(col);
      diag1.add(d1);
      diag2.add(d2);
      current.push(col);

      // 2. EXPLORAR EM PROFUNDIDADE (DFS na próxima linha):
      backtrack(row + 1, current);

      // 3. DESFAZER A ESCOLHA (Backtracking ao desempilhar):
      current.pop();
      cols.delete(col);
      diag1.delete(d1);
      diag2.delete(d2);
    }
  }

  backtrack(0, []);
  return results;
}
