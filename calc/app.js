const calc = require("./math.js");
const fs = require("fs");

{
  const arguments = process.argv;

  if (verifyInput(arguments)) {
    const [a, b] = readFiles(arguments[2], arguments[3]);
    const output = createOutput(a, b);
    writeToFile(output);
  }
}

function verifyInput(input) {
  let pass = false;
  if (input.length > 4) {
    console.log("zbyt dużo parametrów!");
  } else if (input.length < 4) {
    console.log("zbyt mało parametrów!");
  } else {
    pass = true;
  }
  return pass;
}

function readFiles(fileOne, fileTwo) {
  const x = +fs.readFileSync(fileOne);
  const y = +fs.readFileSync(fileTwo);
  return [x, y];
}

function writeToFile(arr) {
  arr.forEach((item) => {
    fs.writeFileSync("wyniki.txt", item + "\n", { flag: "a" });
  });
}

function createOutput(x, y) {
  const add = `Wynik dodawania ${x} i ${y} to ${calc.add(x, y)}`;
  const sub = `Wynik odejmowania ${x} i ${y} to ${calc.sub(x, y)}`;
  const multi = `Wynik mnożenia ${x} i ${y} to ${calc.multi(x, y)}`;
  const div = `Wynik dzielenia ${x} i ${y} to ${calc.div(x, y)}`;
  const PI = `Liczba PI to ${calc.PI}`;
  const output = [add, sub, multi, div, PI];
  return output;
}
