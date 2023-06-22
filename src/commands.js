import * as messages from "./utils/messages.js";
import { changeFolder } from "./utils/changeFolder.js";
import { inputValidate } from "./utils/isValid.js";
import { showList } from "./utils/showList.js";
import { readFile } from "./utils/readFile.js";
import { createFile } from "./utils/createFile.js";
import { renameFile } from "./utils/renameFile.js";
import { copyFile } from "./utils/copyFile.js";
import { moveFile } from "./utils/moveFile.js";
import { removeFile } from "./utils/removeFile.js";

export const commandsSwitcher = async (line) => {
  let [command, ...data] = line
    .trim()
    .split(" ")
    .map((elem) => elem.trim());

  const isValidate = await inputValidate(command, data);

  if (isValidate) {
    switch (command) {
      case ".exit":
        process.exit();
        break;
      case "up":
        process.chdir("..");
        break;
      case "cd":
        changeFolder(data.join(""));
        break;
      case "ls":
        showList();
        break;
      case "cat":
        readFile(data.join(""));
        break;
      case "add":
        createFile(data.join(""));
        break;
      case "rn":
        renameFile(data);
        break;
      case "cp":
        copyFile(data);
        break;
      case "mv":
        moveFile(data);
        break;
      case "rm":
        removeFile(data.join(""));
        break;
    }

    messages.currentDirectory();
  } else {
    messages.inputError();
  }
};
