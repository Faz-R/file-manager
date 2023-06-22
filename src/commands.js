import { changeFolder } from "./utils/changeFolder.js";
import { inputValidate } from "./utils/isValid.js";
import * as messages from "./utils/messages.js";
import { showList } from "./utils/showList.js";

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
    }

    messages.currentDirectory();
  } else {
    messages.inputError();
  }
};
