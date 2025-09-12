export function solveNQueens(n: number): string[][] {
  if (n === 0) {
    return [];
  }

  const board: string[][] = Array.from({ length: n }, () => Array(n).fill("."));
  const cols: Set<number> = new Set();
  const positiveDiag: Set<number> = new Set();
  const negDiag: Set<number> = new Set();
  const result: string[][] = [];

  function backtrack(row: number): void {
    if (row === n) {
      result.push(board.map((r) => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (
        cols.has(col) ||
        positiveDiag.has(row + col) ||
        negDiag.has(row - col)
      ) {
        continue;
      }

      board[row][col] = "Q";
      cols.add(col);
      positiveDiag.add(row + col);
      negDiag.add(row - col);

      backtrack(row + 1);

      board[row][col] = ".";
      cols.delete(col);
      positiveDiag.delete(row + col);
      negDiag.delete(row - col);
    }
  }

  backtrack(0);
  return result;
}

solveNQueens(4);
