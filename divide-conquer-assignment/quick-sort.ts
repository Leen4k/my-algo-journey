export function quickSort(list: number[]): number[] {
  if (list.length <= 1) {
    return [...list];
  }

  const [pivot, ...rest] = list;
  const left: number[] = [];
  const right: number[] = [];

  for (const value of rest) {
    if (value < pivot) {
      left.push(value);
    } else {
      right.push(value);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
