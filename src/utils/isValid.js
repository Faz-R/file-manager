export const inputValidate = async (command, data) => {
  if (
    [".exit", "up", "ls"].some((elem) => elem === command) &&
    data.length === 0
  ) {
    return true;
  } else if (["cd"].some((elem) => elem === command) && data.length === 1) {
    return true;
  } else {
    return false;
  }
};
