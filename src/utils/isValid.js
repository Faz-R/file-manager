export const inputValidate = async (command, data) => {
  if (
    [".exit", "up", "ls"].some((elem) => elem === command) &&
    data.length === 0
  ) {
    return true;
  } else if (
    ["cd", "cat", "add", "rm"].some((elem) => elem === command) &&
    data.length === 1
  ) {
    return true;
  } else if (
    ["rn", "cp", "mv"].some((elem) => elem === command) &&
    data.length === 2
  ) {
    return true;
  } else {
    return false;
  }
};
