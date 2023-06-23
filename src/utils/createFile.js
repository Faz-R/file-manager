import { writeFile } from "fs/promises";
import { operationError } from "./messages.js";

export const createFile = async (name) => {
  try {
    await writeFile(name, "", { flag: "ax" }, (err) => {
      if (err) operationError();
    });
  } catch {
    operationError();
  }
};
