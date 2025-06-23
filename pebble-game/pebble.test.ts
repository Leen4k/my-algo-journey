import { maxPebbleGameResult } from "./pebble-game";

//TODO: add more tests
describe("Pebble Game max result", () => {
  test("should return max result for the example", () => {
    const A = [1, -2, 0, 9, -1, -2];
    const result = maxPebbleGameResult(A);
    expect(result).toBe(8);
  });

  test("should handle simple two-element array", () => {
    const A = [5, 3];
    const result = maxPebbleGameResult(A);
    expect(result).toBe(8);
  });

  test("should handle array with all positive number", () => {
    const A = [1, 2, 3, 4, 5];
    const result = maxPebbleGameResult(A);
    expect(result).toBe(15);
  });

  test("should handle array with negative number at the end", () => {
    const A = [10, 5, 3, -100];
    const result = maxPebbleGameResult(A);
    expect(result).toBe(-82);
  });

  test("should find optimal path avoiding negative numbers when possible", () => {
    const A = [1, -10, -5, 8, 2];
    const result = maxPebbleGameResult(A);
    expect(result).toBe(11);
  });

  test("should handle array where direct jump to end is optimal", () => {
    const A = [5, -1, -2, -3, -4, 10];
    const result = maxPebbleGameResult(A);
    expect(result).toBe(15);
  });

  test("should handle case where we must visit negative intermediate squares", () => {
    const A = [1, -1, -1, -1, -1, -1, 20];
    const result = maxPebbleGameResult(A);
    expect(result).toBe(21);
  });

  test("should handle array with zeros", () => {
    const A = [2, 0, 0, 0, 5];
    const result = maxPebbleGameResult(A);
    expect(result).toBe(7);
  });

  test("should handle case where last element is very negative number", () => {
    const A = [100, 50, 25, -1000];
    const result = maxPebbleGameResult(A);
    expect(result).toBe(-825);
  });

  test("should handle longer array with mixed value", () => {
    const A = [3, -2, 5, 1, -4, 2, 8, -1, 6];
    const result = maxPebbleGameResult(A);
    expect(result).toBeGreaterThan(0);
  });
});

