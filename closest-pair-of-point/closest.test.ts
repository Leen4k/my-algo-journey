import { closestPair, type Point } from "./closes-pair";
import { describe, expect, test } from "bun:test";

const buildPoints = (raw: Array<[number, number]>): Point[] =>
  raw.map(([x, y]) => ({ x, y }));

describe("closest pair distance", () => {
  test("pick the small distance from the example", () => {
    const points = buildPoints([
      [0, 0],
      [1, 0],
      [5, 5],
    ]);

    const answer = closestPair(points);

    expect(answer).toBeCloseTo(1, 6);
  });

  test("handles only two point", () => {
    const points = buildPoints([
      [10, 10],
      [13, 14],
    ]);

    const answer = closestPair(points);

    expect(answer).toBeCloseTo(5, 6);
  });

  test("work with negative value", () => {
    const points = buildPoints([
      [-3, 4],
      [-1, -1],
      [-10, -10],
      [6, -2],
    ]);

    const answer = closestPair(points);

    expect(answer).toBeCloseTo(Math.hypot(2, 5), 6);
  });

  test("work with very large coordinate", () => {
    const points = buildPoints([
      [1000000000, 1000000000],
      [999999999, 999999999],
      [-1000000000, -1000000000],
      [-999999998, -999999997],
    ]);

    const answer = closestPair(points);

    expect(answer).toBeCloseTo(Math.hypot(1, 1), 6);
  });

  test("handle tie cases when many pairs have the same gap", () => {
    const points = buildPoints([
      [0, 0],
      [0, 2],
      [2, 0],
      [2, 2],
      [4, 4],
    ]);

    const answer = closestPair(points);

    expect(answer).toBeCloseTo(2, 6);
  });
});
