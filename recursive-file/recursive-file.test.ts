import { getFileStats } from "./recursive-file";
import { describe, it, expect, beforeAll, afterAll } from "bun:test";
import { promises as fs } from "fs";
import * as path from "path";

describe("file system Statistic", () => {
  const testDir = path.join(__dirname, "test-dir");

  beforeAll(async () => {
    await fs.mkdir(testDir, { recursive: true });
    await fs.mkdir(path.join(testDir, "subdir"));

    await fs.writeFile(path.join(testDir, "dockerreadme.txt"), "0123456789");
    await fs.writeFile(
      path.join(testDir, "nginx2.txt"),
      "01234567890123456789"
    );
    await fs.writeFile(path.join(testDir, "favicon-app.jpg"), "a".repeat(30));
    await fs.writeFile(
      path.join(testDir, "subdir", "file3.txt"),
      "b".repeat(40)
    );
    await fs.writeFile(
      path.join(testDir, "subdir", "archive.zip"),
      "c".repeat(50)
    );
    await fs.writeFile(
      path.join(testDir, "subdir", "document.pdf"),
      "d".repeat(60)
    );
    await fs.writeFile(path.join(testDir, "no-extension"), "e".repeat(5));
  });

  afterAll(async () => {
    await fs.rm(testDir, { recursive: true, force: true });
  });

  it("should calculate total size and stats by extension correctly", async () => {
    const stats = await getFileStats(testDir);

    expect(stats.totalSize).toBe(10 + 20 + 30 + 40 + 50 + 60 + 5);

    expect(stats.byExtension).toEqual({
      ".txt": { count: 3, totalSize: 10 + 20 + 40 },
      ".jpg": { count: 1, totalSize: 30 },
      ".zip": { count: 1, totalSize: 50 },
      ".pdf": { count: 1, totalSize: 60 },
      "": { count: 1, totalSize: 5 },
    });
  });
});
