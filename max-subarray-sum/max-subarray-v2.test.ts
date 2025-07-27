import { maxSubarraySum, maxSubarraySumWithIndices } from "./max-subarray-sum";
import {
  maxSubarraySum as maxSubarraySumV2,
  maxSubarraySumWithIndices as maxSubarraySumWithIndicesV2,
} from "./max-array-v2";
import { MaxSubarrayTestGen } from "./max-subarray-test-generator";

describe("max subarray sum optimized", () => {
  describe("correctness", () => {
    test("classic example", () => {
      const data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
      const v1 = maxSubarraySum(data);
      const v2 = maxSubarraySumV2(data);

      expect(v2.maxSum).toBe(v1.maxSum);
      expect(v2.maxSum).toBe(6);
    });

    test("edge cases", () => {
      expect(maxSubarraySumV2([]).maxSum).toBe(0);
      expect(maxSubarraySumV2([42]).maxSum).toBe(42);
      expect(maxSubarraySumV2([-5]).maxSum).toBe(-5);
    });
  });

  describe("algorithm comparison", () => {
    const testCases = [
      [1, 2, 3, 4, 5],
      [-5, -2, -8, -1],
      [5, -3, 2, -1, 4],
    ];

    testCases.forEach((data, i) => {
      test(`case ${i + 1}`, () => {
        const v1 = maxSubarraySum(data);
        const v2 = maxSubarraySumV2(data);
        expect(v2.maxSum).toBe(v1.maxSum);
      });
    });
  });

  describe("edge cases", () => {
    const edgeCases = MaxSubarrayTestGen.edgeCases();

    edgeCases.forEach((testCase) => {
      test(testCase.name, () => {
        const v1 = maxSubarraySum(testCase.data);
        const v2 = maxSubarraySumV2(testCase.data);

        expect(v2.maxSum).toBe(v1.maxSum);
        if (testCase.expectedSum !== undefined) {
          expect(v1.maxSum).toBe(testCase.expectedSum);
        }
        if (testCase.expectedSubarray !== undefined) {
          expect(v1.subarray).toEqual(testCase.expectedSubarray);
        }
      });
    });
  });

  describe("index tracking", () => {
    test("indices match", () => {
      const data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
      const v1 = maxSubarraySumWithIndices(data);
      const v2 = maxSubarraySumWithIndicesV2(data);

      expect(v2.maxSum).toBe(v1.maxSum);
      expect(v2.startIndex).toBe(v1.startIndex);
      expect(v2.endIndex).toBe(v1.endIndex);
    });
  });

  describe("patterns", () => {
    test("increasing", () => {
      const data = MaxSubarrayTestGen.increasing(20);
      const v1 = maxSubarraySum(data);
      const v2 = maxSubarraySumV2(data);
      expect(v2.maxSum).toBe(v1.maxSum);
      expect(v1.maxSum).toBe(data.reduce((sum, val) => sum + val, 0));
    });

    test("all negative", () => {
      const data = MaxSubarrayTestGen.allNegative(10);
      const v1 = maxSubarraySum(data);
      const v2 = maxSubarraySumV2(data);
      expect(v2.maxSum).toBe(v1.maxSum);
      expect(v1.maxSum).toBe(Math.max(...data));
    });
  });

  describe("performance", () => {
    const sizes = [100, 1000, 10000];

    sizes.forEach((size) => {
      test(`size ${size}`, () => {
        const data = MaxSubarrayTestGen.random(size);

        const start = performance.now();
        const result = maxSubarraySumV2(data);
        const time = performance.now() - start;

        expect(time).toBeLessThan(100);
        expect(isFinite(result.maxSum)).toBe(true);
      });
    });
  });
});
