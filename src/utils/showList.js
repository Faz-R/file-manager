import { readdir } from "fs/promises";
import { extname } from "path";

export const showList = async () => {
  const listPath = process.cwd();
  const files = await readdir(listPath);
  const result = files
    .map((name) => ({
      Name: name,
      Type: extname(name) ? "file" : "directory",
    }))
    .sort((a, b) => {
      if (a.Type === "file" && b.Type === "directory") return 1;
      if (a.Type === "directory" && b.Type === "file") return -1;
    });

  console.table(result);
};
