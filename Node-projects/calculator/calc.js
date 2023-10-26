#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
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
        choices: ["+", "-", "/", "*", "%"],
        name: "operators"
    }
]);
function sub(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function mod(num1, num2) {
    return num1 % num2;
}
function divv(num1, num2) {
    return num1 / num2;
}
function sum(num1, num2) {
    return num1 + num2;
}
var operators = ["+", "-", "/", "*", "% "];
if (answer.operators === "+") {
    var result = sum(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.operators === "-") {
    var result = sub(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.operators === "/") {
    var result = divv(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.operators === "*") {
    var result = mult(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.operators === "%") {
    var result = mod(answer.num1, answer.num2);
    console.log(result);
}
