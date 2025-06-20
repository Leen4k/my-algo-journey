import { maxSubarraySum } from "./max-subarray-sum";

describe("Maximum Subarray Sum", () => {
  test("should return maximum sum for the example input", () => {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const result = maxSubarraySum(input);
    expect(result.maxSum).toBe(6);
    expect(result.subarray).toEqual([4, -1, 2, 1]);
  });

  test("should return maximum sum for an array with only positive numbers", () => {
    const input = [1, 2, 3, 4, 5];
    const result = maxSubarraySum(input);
    expect(result.maxSum).toBe(15);
    expect(result.subarray).toEqual([1, 2, 3, 4, 5]);
  });

  test("should return maximum sum for an array with only negative numbers", () => {
    const input = [-5, -2, -8, -1, -4];
    const result = maxSubarraySum(input);
    expect(result.maxSum).toBe(-1);
    expect(result.subarray).toEqual([-1]);
  });

  test("should return maximum sum for an array with one element", () => {
    const input = [42];
    const result = maxSubarraySum(input);
    expect(result.maxSum).toBe(42);
    expect(result.subarray).toEqual([42]);
  });

  test("should return maximum sum for an array with one negative element", () => {
    const input = [-10];
    const result = maxSubarraySum(input);
    expect(result.maxSum).toBe(-10);
    expect(result.subarray).toEqual([-10]);
  });

  test("should return maximum sum for a mixed array starting with negative", () => {
    const input = [-1, -2, 3, 4, -1, 2, 1, -5, 4];
    const result = maxSubarraySum(input);
    expect(result.maxSum).toBe(9);
    expect(result.subarray).toEqual([3, 4, -1, 2, 1]);
  });

  test("should return maximum sum for an array that includes zeros", () => {
    const input = [-2, 0, -1, 3, 0, -2, 2];
    const result = maxSubarraySum(input);
    expect(result.maxSum).toBe(3);
    expect(result.subarray).toEqual([3]);
  });

  test("should handle an empty array", () => {
    const input: number[] = [];
    const result = maxSubarraySum(input);
    expect(result.maxSum).toBe(0);
    expect(result.subarray).toEqual([]);
  });

  test("should return maximum sum for an array with alternating positive and negative numbers", () => {
    const input = [5, -3, 2, -1, 4];
    const result = maxSubarraySum(input);
    expect(result.maxSum).toBe(7);
    expect(result.subarray).toEqual([5, -3, 2, -1, 4]);
  });
});
