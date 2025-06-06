import { describe, it, expect } from "bun:test";
import { recursiveCalc } from "./recursive-calc";

describe("recursiveCalc", () => {
  it("should handle addition and multiplication with precedence", () => {
    expect(recursiveCalc("1 + 2 * 3")).toBe(7);
  });

  it("should handle parentheses", () => {
    expect(recursiveCalc("(1 + 2) * 10 - 6 / (9 * (2 + 1))")).toBeCloseTo(29.777, 2);
  });

  it("should handle multiple operations", () => {
    expect(recursiveCalc("1 + 2 * 3 + 4")).toBe(11);
  });

  it("should handle subtraction", () => {
    expect(recursiveCalc("2 - 2")).toBe(0);
  });

  it("should handle division", () => {
    expect(recursiveCalc("8 / 2")).toBe(4);
  });

  it("should handle nested parentheses", () => {
    expect(recursiveCalc("2 * (3 + (4 * 5))")).toBe(46);
  });
});