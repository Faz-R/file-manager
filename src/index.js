import { createInterface } from "readline/promises";
import * as messages from "./utils/messages.js";
import { commandsSwitcher } from "./commands.js";
import { homedir } from "os";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let username = "Anonymous";

const args = process.argv.slice(2);
let user = args.find((el) => el.startsWith("--username"));

if (user) username = user.replace("--username=", "").trim();

process.chdir(homedir());

messages.currentDirectory();
messages.welcomeMessage(username);

rl.on("line", commandsSwitcher);

process.on("exit", () => {
  messages.exitMessage(username);
});
