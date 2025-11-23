import { describe, expect, test } from "bun:test";
import { mergeHalves, mergeSort } from "./merge-sort";

describe("merge sort (divide + conqer + combine)", () => {
  test("returns the same array when there is nothing to divide", () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([42])).toEqual([42]);
  });

  test("sorts numbers of different sign and length", () => {
    const data = [7, -3, 9, 9, 1, 0, -3];

    expect(mergeSort(data)).toEqual([-3, -3, 0, 1, 7, 9, 9]);
    expect(data).toEqual([7, -3, 9, 9, 1, 0, -3]);
  });

  test("merge combine step merge two sorted halves", () => {
    expect(mergeHalves([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeHalves([1, 1, 2], [1, 3])).toEqual([1, 1, 1, 2, 3]);
  });
});
