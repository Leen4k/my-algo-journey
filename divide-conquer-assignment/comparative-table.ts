export type ComparativeRow = {
  algorithm: string;
  divide: string;
  conquer: string;
  combine: string;
};

export const comparativeTable: ComparativeRow[] = [
  {
    algorithm: "binary search",
    divide: "halves the search interval around the midpoint",
    conquer: "cannot (no recursive conquering)",
    combine: "cannot (no combine step)",
  },
  {
    algorithm: "merge sort",
    divide: "split array into halves until base size is reached",
    conquer: "recursively sort both halves",
    combine: "merge the two sorted halves into one sorted array",
  },
  {
    algorithm: "quick sort",
    divide:
      "partition around pivot (less-than on left, greater-or-equal on right)",
    conquer: "recurse left/right partitionn",
    combine: "simple combine: concatenation of sorted partition",
  },
];
