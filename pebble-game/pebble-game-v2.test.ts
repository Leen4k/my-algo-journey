import {
  maxPebbleGameResultV2,
  maxPebbleGameResultWithPathV2,
  maxPebbleGameResultSegmentTree,
  isPathValid,
  calculatePathSum,
} from "./pebble-game-v2";
import {
  maxPebbleGameResult,
  maxPebbleGameResultWithPath,
} from "./pebble-game";
import { TestDataGenerator } from "./pebble-game-test-data";

describe("pebble game optimized", () => {
  describe("correctness", () => {
    test("example case", () => {
      const data = [1, -2, 0, 9, -1, -2];
      const original = maxPebbleGameResult(data);
      const v2 = maxPebbleGameResultV2(data);
      const segTree = maxPebbleGameResultSegmentTree(data);

      expect(v2).toBe(original);
      expect(segTree).toBe(original);
      expect(v2).toBe(8);
    });

    test("edge cases", () => {
      expect(maxPebbleGameResultV2([])).toBe(0);
      expect(maxPebbleGameResultV2([42])).toBe(42);
      expect(maxPebbleGameResultV2([1, 2])).toBe(3);
    });
  });

  describe("algorithm comparison", () => {
    const testCases = [
      [1, 2, 3, 4, 5],
      [-5, -2, -8, -1],
      [10, -5, 8, -3, 12],
    ];

    testCases.forEach((data, i) => {
      test(`case ${i + 1}`, () => {
        const original = maxPebbleGameResult(data);
        const v2 = maxPebbleGameResultV2(data);
        const segTree = maxPebbleGameResultSegmentTree(data);

        expect(v2).toBe(original);
        expect(segTree).toBe(original);
      });
    });
  });

  describe("paths", () => {
    test("valid paths", () => {
      const data = [1, -2, 0, 9, -1, -2];
      const original = maxPebbleGameResultWithPath(data);
      const v2 = maxPebbleGameResultWithPathV2(data);

      expect(v2.maxSum).toBe(original.maxSum);
      expect(isPathValid(v2.path)).toBe(true);
      expect(calculatePathSum(data, v2.path)).toBe(v2.maxSum);
    });
  });

  describe("patterns", () => {
    test("increasing", () => {
      const data = TestDataGenerator.increasing(20);
      const original = maxPebbleGameResult(data);
      const v2 = maxPebbleGameResultV2(data);
      expect(v2).toBe(original);
    });

    test("alternating", () => {
      const data = TestDataGenerator.alternating(20);
      const original = maxPebbleGameResult(data);
      const v2 = maxPebbleGameResultV2(data);
      expect(v2).toBe(original);
    });
  });

  describe("performance", () => {
    const sizes = [100, 1000, 10000];

    sizes.forEach((size) => {
      test(`size ${size}`, () => {
        const data = TestDataGenerator.random(size);

        const start = performance.now();
        const result = maxPebbleGameResultV2(data);
        const time = performance.now() - start;

        expect(time).toBeLessThan(100);
        expect(isFinite(result)).toBe(true);
      });
    });
  });
});
