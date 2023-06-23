import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { operationError } from "./messages.js";

export const hashFile = async (path) => {
  try {
    const buff = await readFile(path);
    const hash = createHash("sha256").update(buff).digest("hex");
    console.log(hash);
  } catch {
    operationError();
  }
};
