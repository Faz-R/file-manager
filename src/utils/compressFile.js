import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliCompress } from "node:zlib";
import { operationError } from "./messages.js";
import { resolve, parse } from "path";
import { access } from "fs/promises";

export const compressFile = async ([filePath, destinationPath]) => {
  try {
    const originalFile = resolve(filePath);
    const { base } = parse(originalFile);
    const zlibFile = resolve(destinationPath, base + ".gz");
    await access(originalFile);
    pipeline(
      createReadStream(originalFile),
      createBrotliCompress(),
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
