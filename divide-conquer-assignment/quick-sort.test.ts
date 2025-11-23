import { describe, expect, test } from "bun:test";
import { quickSort } from "./quick-sort";

describe("quick sort (divide , conquer, simple combine)", () => {
  test("return same array when input length less than or equal 1", () => {
    expect(quickSort([])).toEqual([]);
    expect(quickSort([5])).toEqual([5]);
  });

  test("sort numbers in place by partitioning around pivot", () => {
    const data = [4, 2, 5, 2, -1, 9];
    const sorted = quickSort([...data]);

    expect(sorted).toEqual([-1, 2, 2, 4, 5, 9]);
    expect(data).toEqual([4, 2, 5, 2, -1, 9]);
  });

  test("handle the repeated value and also negative number", () => {
    expect(quickSort([3, -2, 3, -2, 0])).toEqual([-2, -2, 0, 3, 3]);
  });
});
