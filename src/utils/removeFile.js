import { operationError } from "./messages.js";
import { rm } from "fs/promises";
import { resolve } from "path";

export const removeFile = async (path) => {
  try {
    const fullPath = resolve(path);
    await rm(fullPath);
  } catch {
    operationError();
  }
};
