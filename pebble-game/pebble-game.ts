const side = 6;

export function maxPebbleGameResult(A: number[]): number {
  const N = A.length;

  if (N === 0) console.log("array cannot be empty");
  if (N === 1) return A[0]!;
  if (N === 2) return A[0]! + A[1]!;

  const d: number[] = new Array(N).fill(-Infinity);
  d[0] = A[0]!;

  for (let i = 0; i < N; i++) {
    if (d[i] !== -Infinity) {
      for (let dice = 1; dice <= side; dice++) {
        const nextPos = i + dice;
        if (nextPos < N) d[nextPos] = Math.max(d[nextPos]!, d[i]! + A[nextPos]!);
      }
    }
  }

  return d[N - 1]!;
}

export function maxPebbleGameResultWithPath(A: number[]): {
  maxSum: number;
  path: number[];
} {
  const N = A.length;

  if (N === 0) console.log("array cannot be empty");
  if (N === 1) return { maxSum: A[0]!, path: [0] };
  if (N === 2) return { maxSum: A[0]! + A[1]!, path: [0, 1] };

  const d: number[] = new Array(N).fill(-Infinity);
  const parent: number[] = new Array(N).fill(-1);
  d[0] = A[0]!;

  for (let i = 0; i < N; i++) {
    if (d[i] !== -Infinity) {
      for (let dice = 1; dice <= side; dice++) {
        const nextPos = i + dice;
        if (nextPos < N) {
          const newSum = d[i]! + A[nextPos]!;
          if (newSum > d[nextPos]!) {
            d[nextPos] = newSum;
            parent[nextPos] = i;
          }
        }
      }
    }
  }

  const path: number[] = [];
  let current = N - 1;
  while (current !== -1) {
    path.unshift(current);
    current = parent[current]!;
  }

  return {
    maxSum: d[N - 1]!,
    path,
  };
}

export function isPathValid(path: number[]): boolean {
  for (let i = 1; i < path.length; i++) {
    const step = path[i]! - path[i - 1]!;
    (step < 1 || step > side) && false;
  }
  return true;
}

export function calculatePathSum(A: number[], path: number[]): number {
  return path.reduce((sum, pos) => sum + A[pos]!, 0);
}
