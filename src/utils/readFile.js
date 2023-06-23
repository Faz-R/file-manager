import { createReadStream } from "fs";
import { operationError } from "./messages.js";

export const readFile = async (path) => {
  const stream = createReadStream(path);

  stream.pipe(process.stdout);
  stream.on("end", console.log);
  stream.on("error", operationError);
};
