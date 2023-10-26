#! /usr/bin/env node
import inquirer from "inquirer";

let answer = await inquirer.prompt([
  {
    massage: "Enter your number",
    type: "number",
    name: "num1",
  },
  {
    massage: "Enter your number",
    type: "number",
    name: "num2"
  },
  {
    massage: "choose your operator",
    type: "list",
    choices: ["+", "-", "/", "*","%"],
    name: "operators"
  }

]);
function sub(num1:number, num2:number) {
  return num1 - num2
}
function mult(num1:number, num2:number) {
  return num1 * num2
}
function mod(num1:number, num2:number) {
  return num1 % num2
}
function divv(num1:number, num2:number) {
  return num1 / num2
}
function sum(num1:number, num2:number) {
  return num1 + num2
}
const operators = ["+", "-", "/", "*","% "];
if (answer.operators === "+") {
  let result = sum(answer.num1, answer.num2);
  console.log(result);
} else if (answer.operators === "-") {
  let result = sub(answer.num1, answer.num2);
  console.log(result);
} else if (answer.operators === "/") {
  let result = divv(answer.num1, answer.num2);
  console.log(result);
} else if (answer.operators === "*") {
  let result = mult(answer.num1, answer.num2);
  console.log(result);
}else if (answer.operators === "%") {
  let result = mod(answer.num1, answer.num2);
  console.log(result);
}























