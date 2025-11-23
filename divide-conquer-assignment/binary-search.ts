export function binarySearch(list: number[], target: number): number {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const valueAtMid = list[mid];

    if (valueAtMid === target) {
      return mid;
    }

    if (valueAtMid < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
