import { EOL, cpus, homedir, userInfo, arch } from "os";
import { inputError } from "./messages.js";

export const systemSwitcher = (command) => {
  switch (command) {
    case "--EOL":
      console.log(JSON.stringify(EOL));
      break;
    case "--cpus":
      const quantityCPU = cpus().length;
      const cpusModel = cpus().map((el) => ({
        Model: el.model,
        "Clock rate": (el.speed / 1000).toFixed(1) + "GHz",
      }));
      console.log(`Overall amount of CPUS - ${quantityCPU}`);
      console.table(cpusModel);
      break;
    case "--homedir":
      console.log(homedir());
      break;
    case "--username":
      console.log(userInfo().username);
      break;
    case "--architecture":
      console.log(arch());
      break;
    default:
      inputError();
      break;
  }
};
