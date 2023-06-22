import { operationError } from "./messages.js";

export const changeFolder = (folder) => {
  console.log(folder);
  try {
    process.chdir(folder);
  } catch {
    operationError();
  }
};
