import { promises as fs } from "fs";
import * as path from "path";

interface FileStat {
  extension: string;
  size: number;
}

interface ExtensionInfo {
  count: number;
  totalSize: number;
}


async function findFilesRecursively(dir: string): Promise<FileStat[]> {
  const rootDir = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    rootDir.map(async (dirent) => {
      const res = path.resolve(dir, dirent.name);
      if (dirent.isDirectory()) return findFilesRecursively(res);

      const info = await fs.stat(res);
      return {
        extension: path.extname(dirent.name),
        size: info.size,
      };
    })
  );
  return Array.prototype.concat(...files);
}

export async function getFileStats(rootDirectory: string) {
  !rootDirectory && console.log("please enter ur directory src...");

  const fileStats = await findFilesRecursively(rootDirectory);

  let totalSize = 0;
  const byExtension: { [key: string]: ExtensionInfo } = {};

  for (const stat of fileStats) {
    totalSize += stat.size;
    !byExtension[stat.extension] &&
      (byExtension[stat.extension] = { count: 0, totalSize: 0 });
    byExtension[stat.extension]!.count++;
    byExtension[stat.extension]!.totalSize += stat.size;
  }

  return {
    totalSize,
    byExtension,
  };
}
