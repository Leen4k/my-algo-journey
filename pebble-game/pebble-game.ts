const diceMaxValue = 6;

export function maxPebbleGameResult(pebbleValues: number[]): number {
  const boardSize = pebbleValues.length;

  if (boardSize === 0) return 0;
  if (boardSize === 1) return pebbleValues[0]!;
  if (boardSize === 2) return pebbleValues[0]! + pebbleValues[1]!;

  const maxSumAtPosition: number[] = new Array(boardSize).fill(-Infinity);
  maxSumAtPosition[0] = pebbleValues[0]!;

  for (
    let currentPosition = 0;
    currentPosition < boardSize;
    currentPosition++
  ) {
    if (maxSumAtPosition[currentPosition] !== -Infinity) {
      for (let diceRoll = 1; diceRoll <= diceMaxValue; diceRoll++) {
        const nextPosition = currentPosition + diceRoll;

        if (nextPosition < boardSize) {
          const newSum =
            maxSumAtPosition[currentPosition]! + pebbleValues[nextPosition]!;
          maxSumAtPosition[nextPosition] = Math.max(
            maxSumAtPosition[nextPosition]!,
            newSum
          );
        }
      }
    }
  }

  return maxSumAtPosition[boardSize - 1]!;
}

export function maxPebbleGameResultWithPath(pebbleValues: number[]): {
  maxSum: number;
  path: number[];
} {
  const boardSize = pebbleValues.length;

  if (boardSize === 0) return { maxSum: 0, path: [] }; 
  if (boardSize === 1) return { maxSum: pebbleValues[0]!, path: [0] };
  if (boardSize === 2) return { maxSum: pebbleValues[0]! + pebbleValues[1]!, path: [0, 1] };

  const maxSumAtPosition: number[] = new Array(boardSize).fill(-Infinity);
  const previousPosition: number[] = new Array(boardSize).fill(-1);

  maxSumAtPosition[0] = pebbleValues[0]!;

  for (
    let currentPosition = 0;
    currentPosition < boardSize;
    currentPosition++
  ) {
    if (maxSumAtPosition[currentPosition] !== -Infinity) {
      for (let diceRoll = 1; diceRoll <= diceMaxValue; diceRoll++) {
        const nextPosition = currentPosition + diceRoll;

        if (nextPosition < boardSize) {
          const newSum =
            maxSumAtPosition[currentPosition]! + pebbleValues[nextPosition]!;
          if (newSum > maxSumAtPosition[nextPosition]!) {
            maxSumAtPosition[nextPosition] = newSum;
            previousPosition[nextPosition] = currentPosition;
          }
        }
      }
    }
  }

  const optimalPath: number[] = [];
  let currentPos = boardSize - 1;

  while (currentPos !== -1) {
    optimalPath.unshift(currentPos);
    currentPos = previousPosition[currentPos]!;
  }

  return {
    maxSum: maxSumAtPosition[boardSize - 1]!,
    path: optimalPath,
  };
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
