import { rename } from "fs/promises";
import { operationError } from "./messages.js";

export const renameFile = async ([oldName, newName]) => {
  const currentDirectory = process.cwd();
  const oldPath = `${currentDirectory}/${oldName}`;
  const newPath = `${currentDirectory}/${newName}`;
  try {
    await rename(oldPath, newPath);
  } catch {
    operationError();
  }
};
