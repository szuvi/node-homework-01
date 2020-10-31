const path = require("path");
const fs = require("fs");

{
  const arguments = process.argv;
  if (verifyInput(arguments)) {
    const currPath = path.normalize(arguments[2]);
    const directory = fs.readdirSync(currPath);
    showDirectory(directory);
  }
}

function verifyInput(input) {
  let pass = false;
  if (input.length > 3) {
    console.log("zbyt dużo parametrów!");
  } else if (input.length < 3) {
    console.log("zbyt mało parametrów!");
  } else {
    pass = true;
  }
  return pass;
}

function showDirectory(dir) {
  dir.forEach((item) => {
    console.log(item);
  });
}
