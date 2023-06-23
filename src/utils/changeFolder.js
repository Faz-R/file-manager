import { operationError } from "./messages.js";

export const changeFolder = (folder) => {
  try {
    const correctFolder = folder.replace("_", " ");
    process.chdir(correctFolder);
  } catch {
    operationError();
  }
};
