export function mergeSort(list: number[]): number[] {
  if (list.length <= 1) {
    return [...list];
  }

  const midpoint = Math.floor(list.length / 2);
  const left = mergeSort(list.slice(0, midpoint));
  const right = mergeSort(list.slice(midpoint));

  return mergeHalves(left, right);
}

export function mergeHalves(left: number[], right: number[]): number[] {
  const merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i += 1;
    } else {
      merged.push(right[j]);
      j += 1;
    }
  }

  if (i < left.length) {
    merged.push(...left.slice(i));
  }

  if (j < right.length) {
    merged.push(...right.slice(j));
  }

  return merged;
}
