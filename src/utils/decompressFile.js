import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliDecompress } from "node:zlib";
import { operationError } from "./messages.js";
import { resolve, parse } from "path";
import { access } from "fs/promises";

export const decompressFile = async ([filePath, destinationPath]) => {
  try {
    const originalFile = resolve(filePath);
    const { name } = parse(originalFile);
    const zlibFile = resolve(destinationPath, name);
    await access(originalFile);
    pipeline(
      createReadStream(originalFile),
      createBrotliDecompress(),
      createWriteStream(zlibFile),
      (err) => {
        if (err) {
          operationError();
        }
      }
    );
  } catch (err) {
    operationError();
  }
};
