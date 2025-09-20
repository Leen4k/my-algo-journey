import { solveNQueens } from "./queen-chess";

describe("solveNQueens function", () => {
  test('should return [["Q"]] for n = 1', () => {
    const result = solveNQueens(1);
    const expected = [["Q"]];
    expect(result).toEqual(expected);
  });

  test("should return two distinct solutions for n = 4", () => {
    const result = solveNQueens(4);
    const expected = [
      [".Q..", "...Q", "Q...", "..Q."],
      ["..Q.", "Q...", "...Q", ".Q.."],
    ];
    const sortedResult = result.map((board) => board.join("\n")).sort();
    const sortedExpected = expected.map((board) => board.join("\n")).sort();

    expect(sortedResult.length).toBe(expected.length);
    expect(sortedResult).toEqual(sortedExpected);
  });

  test("should return an empty array for n = 2 (no solutions)", () => {
    const result = solveNQueens(2);
    const expected: string[][] = [];
    expect(result).toEqual(expected);
  });

  test("should return an empty array for n = 3 (no solutions)", () => {
    const result = solveNQueens(3);
    const expected: string[][] = [];
    expect(result).toEqual(expected);
  });

  test("should return an empty array for n = 0 (edge case)", () => {
    const result = solveNQueens(0);
    const expected: string[][] = [];
    expect(result).toEqual(expected);
  });
});

