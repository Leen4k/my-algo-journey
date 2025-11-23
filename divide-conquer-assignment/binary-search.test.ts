import { describe, expect, test } from "bun:test";
import { binarySearch } from "./binary-search";

describe("binary search (for divide only)", () => {
  test("find index of an existing value in a sorted array", () => {
    const sorted = [2, 4, 6, 8, 10, 12];

    expect(binarySearch(sorted, 8)).toBe(3);
    expect(binarySearch(sorted, 2)).toBe(0);
    expect(binarySearch(sorted, 12)).toBe(sorted.length - 1);
  });

  test("return back -1 when the target value is not there..", () => {
    const sorted = [1, 3, 5, 7, 9];

    expect(binarySearch(sorted, 4)).toBe(-1);
  });

  test("doesn't modify the input array when we devide the search space", () => {
    const sorted = [5, 7, 11, 13, 17, 19];
    const snapshot = [...sorted];

    binarySearch(sorted, 7);

    expect(sorted).toEqual(snapshot);
  });
});
