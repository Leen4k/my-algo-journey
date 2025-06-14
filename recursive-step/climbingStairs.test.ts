import {
  climbStairsRecursive,
  climbStairsDynamicProgramming,
} from "./climbingStairs";

describe("climbing stair", () => {
  const testCases = [
    { n: 0, expected: 1 },
    { n: 1, expected: 1 },
    { n: 2, expected: 2 },
    { n: 3, expected: 3 },
    { n: 4, expected: 5 },
    { n: 5, expected: 8 },
    { n: 6, expected: 13 },
  ];

  describe("recursive solution", () => {
    testCases.forEach(({ n, expected }) => {
      it(`should return ${expected} ways to climb ${n} stairs`, () => {
        expect(climbStairsRecursive(n)).toBe(expected);
      });
    });
  });

  describe("dynamic programming solution", () => {
    testCases.forEach(({ n, expected }) => {
      it(`should return ${expected} ways to climb ${n} stairs`, () => {
        expect(climbStairsDynamicProgramming(n)).toBe(expected);
      });
    });
  });
});
