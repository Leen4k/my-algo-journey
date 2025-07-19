const diceMaxValue = 6;

interface DequeNode {
  position: number;
  maxSum: number;
}

export function maxPebbleGameResultV2(pebbleValues: number[]): number {
  const boardSize = pebbleValues.length;

  if (boardSize === 0) return 0;
  if (boardSize === 1) return pebbleValues[0]!;
  if (boardSize === 2) return pebbleValues[0]! + pebbleValues[1]!;

  const dp: number[] = new Array(boardSize).fill(-Infinity);
  dp[0] = pebbleValues[0]!;

  const deque: DequeNode[] = [];
  deque.push({ position: 0, maxSum: dp[0]! });

  for (let i = 1; i < boardSize; i++) {
    while (deque.length > 0 && deque[0]!.position < i - diceMaxValue) {
      deque.shift();
    }

    if (deque.length > 0) {
      dp[i] = deque[0]!.maxSum + pebbleValues[i]!;
    }

    while (
      deque.length > 0 &&
      deque[deque.length - 1] !== undefined &&
      deque[deque.length - 1]!.maxSum <= (dp[i] ?? -Infinity)
    ) {
      deque.pop();
    }

    if (dp[i] !== -Infinity && dp[i] !== undefined) {
      deque.push({ position: i, maxSum: dp[i]! });
    }
  }

  return dp[boardSize - 1]!;
}

export function maxPebbleGameResultWithPathV2(pebbleValues: number[]): {
  maxSum: number;
  path: number[];
} {
  const boardSize = pebbleValues.length;

  if (boardSize === 0) return { maxSum: 0, path: [] };
  if (boardSize === 1) return { maxSum: pebbleValues[0]!, path: [0] };
  if (boardSize === 2)
    return { maxSum: pebbleValues[0]! + pebbleValues[1]!, path: [0, 1] };

  const dp: number[] = new Array(boardSize).fill(-Infinity);
  const parent: number[] = new Array(boardSize).fill(-1);
  dp[0] = pebbleValues[0]!;

  const deque: DequeNode[] = [];
  deque.push({ position: 0, maxSum: dp[0]! });

  for (let i = 1; i < boardSize; i++) {
    while (deque.length > 0 && deque[0]!.position < i - diceMaxValue) {
      deque.shift();
    }

    if (deque.length > 0) {
      dp[i] = deque[0]!.maxSum + pebbleValues[i]!;
      parent[i] = deque[0]!.position;
    }

    while (
      deque.length > 0 &&
      deque[deque.length - 1] !== undefined &&
      deque[deque.length - 1]!.maxSum <= (dp[i] ?? -Infinity)
    ) {
      deque.pop();
    }

    if (dp[i] !== -Infinity && dp[i] !== undefined) {
      deque.push({ position: i, maxSum: dp[i]! });
    }
  }

  const optimalPath: number[] = [];
  let currentPos = boardSize - 1;

  while (currentPos !== -1) {
    optimalPath.unshift(currentPos);
    currentPos = parent[currentPos]!;
  }

  return {
    maxSum: dp[boardSize - 1]!,
    path: optimalPath,
  };
}

export function maxPebbleGameResultSegmentTree(pebbleValues: number[]): number {
  const boardSize = pebbleValues.length;

  if (boardSize === 0) return 0;
  if (boardSize === 1) return pebbleValues[0]!;
  if (boardSize === 2) return pebbleValues[0]! + pebbleValues[1]!;

  const dp: number[] = new Array(boardSize).fill(-Infinity);
  dp[0] = pebbleValues[0]!;

  for (let i = 1; i < boardSize; i++) {
    const start = Math.max(0, i - diceMaxValue);
    let maxPrev = -Infinity;

    for (let j = start; j < i; j++) {
      if (dp[j] !== -Infinity && dp[j] !== undefined) {
        maxPrev = Math.max(maxPrev, dp[j]!);
      }
    }

    if (maxPrev !== -Infinity) {
      dp[i] = maxPrev + pebbleValues[i]!;
    }
  }

  return dp[boardSize - 1]!;
}

export function isPathValid(path: number[]): boolean {
  for (let i = 1; i < path.length; i++) {
    const stepSize = path[i]! - path[i - 1]!;
    if (stepSize < 1 || stepSize > diceMaxValue) {
      return false;
    }
  }
  return true;
}

export function calculatePathSum(
  pebbleValues: number[],
  path: number[]
): number {
  return path.reduce(
    (totalSum, position) => totalSum + pebbleValues[position]!,
    0
  );
}
