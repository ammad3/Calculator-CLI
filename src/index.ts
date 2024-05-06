#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlue('Calculator'));
const answer = await inquirer.prompt([
  { message: "Type Number > ", type: "number", name: "firstNumber" },
  {
    name: "operator",
    type: "list",
    message: "< Operator > ",
    choices: ["[+]", "[-]", "[*]", "[/]"],
  },
  { message: "Type Number > ", type: "number", name: "secondNumber" },
]);
//Global variables
let firstNum = answer.firstNumber;
let secondNum = answer.secondNumber;
// Conditional Statements.
if (answer.operator === "[+]") {
  let addOp = answer.firstNumber + answer.secondNumber;
  console.log(`> ${firstNum} + ${secondNum} = ` + addOp);
} else if (answer.operator === "[-]") {
  let subOp = answer.firstNumber - answer.secondNumber;
  console.log(`> ${firstNum} - ${secondNum} = ` + subOp);
} else if (answer.operator === "[*]") {
  let multiOp = answer.firstNumber * answer.secondNumber;
  console.log(`> ${firstNum} * ${secondNum} = ` + multiOp);
} else if (answer.operator === "[/]") {
  let divOp = answer.firstNumber / answer.secondNumber;
  console.log(`> ${firstNum} / ${secondNum} = ` + divOp);
} else {
  console.log("Please Select Valid Operator");
}
