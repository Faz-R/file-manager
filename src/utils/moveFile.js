import { createReadStream, createWriteStream } from "fs";
import { operationError } from "./messages.js";
import { access, rm } from "fs/promises";
import { pipeline } from "stream/promises";

import { resolve, parse } from "path";

export const moveFile = async ([oldPath, newPath]) => {
  try {
    const oldFile = resolve(oldPath);
    const { base } = parse(oldFile);
    const newFile = resolve(newPath, base);

    await access(oldFile);
    const read = createReadStream(oldFile);
    const write = createWriteStream(newFile);
    await pipeline(read, write);
    await rm(oldFile);
  } catch {
    operationError();
  }
};
