export type Point = {
  x: number;
  y: number;
};

const smallSizeForBruteforce = 3;

function calculateDistance(p1: Point, p2: Point): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function bruteForce(points: Point[]): number {
  let minDistance = Infinity;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const p1 = points[i]!;
      const p2 = points[j]!;
      const distance = calculateDistance(points[i]!, points[j]!);
      console.log(`distance between (${p1.x},${p1.y}) & (${p2.x},${p2.y}) = ${distance.toFixed(2)}`);
      minDistance = Math.min(minDistance, distance);
    }
  }
  return minDistance;
}

function findClosestInMiddle(
  middlePoints: Point[],
  currentMin: number
): number {
  let minDistance = currentMin;
  middlePoints.sort((a, b) => a.y - b.y);

  for (let i = 0; i < middlePoints.length; i++) {
    for (
      let j = i + 1;
      j < middlePoints.length &&
      middlePoints[j]!.y - middlePoints[i]!.y < minDistance;
      j++
    ) {
      const distance = calculateDistance(middlePoints[i]!, middlePoints[j]!);
      minDistance = Math.min(minDistance, distance);
    }
  }
  return minDistance;
}

function divideAndConquer(sortedByX: Point[]): number {
  const n = sortedByX.length;

  if (n <= smallSizeForBruteforce) {
    return bruteForce(sortedByX);
  }

  const mid = Math.floor(n / 2);
  const dividerPoint = sortedByX[mid]!;
  const leftHalf = sortedByX.slice(0, mid);
  const rightHalf = sortedByX.slice(mid);
  const leftMin = divideAndConquer(leftHalf);
  const rightMin = divideAndConquer(rightHalf);

  let currentMin = Math.min(leftMin, rightMin);

  // const middlePoints = sortedByX.filter(
  //   (pts) => Math.abs(pts.x - dividerPoint.x) < currentMin
  // );
  const middlePoints: Point[] = [];
  for (const point of sortedByX) {
    if (Math.abs(point.x - dividerPoint.x) < currentMin) {
      middlePoints.push(point);
    }
  }

  const middleMin = findClosestInMiddle(middlePoints, currentMin);
  return Math.min(currentMin, middleMin);
}
export function closestPair(points: Point[]): number {
  const sortedByX = [...points].sort((a, b) => a.x - b.x);
  return divideAndConquer(sortedByX);
}

const testPoints: Point[] = [
  { x: 2, y: 3 },
  { x: 12, y: 30 },
  { x: 40, y: 50 },
  { x: 5, y: 1 },
  { x: 12, y: 10 },
  { x: 3, y: 4 },
];

const result = closestPair(testPoints);
console.log(result);
