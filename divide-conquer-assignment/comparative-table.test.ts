import { describe, expect, test } from "bun:test";
import { comparativeTable } from "./comparative-table";

describe("comparative table (divide , conquer , combine)", () => {
  test("define row for each of the three algorithms", () => {
    const names = comparativeTable.map((entry) => entry.algorithm);

    expect(names).toEqual(["binary search", "merge sort", "quick sort"]);
  });

  test("binary search row only check divide", () => {
    const row = comparativeTable.find(
      (entry) => entry.algorithm === "binary search"
    );
    expect(row).toBeDefined();
    expect(row?.divide).toContain("halves the search");
    expect(row?.conquer).toBe("cannot (no recursive conquering)");
    expect(row?.combine).toBe("cannot (no combine step)");
  });

  test("merge sort row includes divide, conquer, and combine", () => {
    const row = comparativeTable.find(
      (entry) => entry.algorithm === "merge sort"
    );
    expect(row).toBeDefined();
    expect(row?.divide).toContain("split array into halves");
    expect(row?.conquer).toContain("recursively sort both halves");
    expect(row?.combine).toContain("merge the two sorted halves");
  });

  test("quick sort row divide and conquer by partition with simple combine", () => {
    const row = comparativeTable.find(
      (entry) => entry.algorithm === "quick sort"
    );
    expect(row).toBeDefined();
    expect(row?.divide).toContain("partition around pivot");
    expect(row?.conquer).toContain("recurse left/right partitionn");
    expect(row?.combine).toBe(
      "simple combine: concatenation of sorted partition"
    );
  });
});
