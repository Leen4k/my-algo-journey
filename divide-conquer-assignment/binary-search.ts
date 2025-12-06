export function binarySearch(list: number[], target: number) {
  return search(list, target, 0, list.length - 1);
}

function search(
  list: number[],
  target: number,
  low: number,
  high: number
): number {
  if (low > high) {
    return -1;
  }

  const mid = low + Math.floor((high - low) / 2);
  const valueAtMid = list[mid];

  if (valueAtMid === target) {
    return mid;
  }

  if (valueAtMid < target) {
    return search(list, target, mid + 1, high);
  } else {
    return search(list, target, low, mid - 1);
  }
}

// export function binarySearch(list: number[], target: number): number {
//   let low = 0;
//   let high = list.length - 1;

//   while (low <= high) {
//     const mid = low + Math.floor((high - low) / 2);
//     const valueAtMid = list[mid];

//     if (valueAtMid === target) {
//       return mid;
//     }

//     if (valueAtMid < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return -1;
// }
