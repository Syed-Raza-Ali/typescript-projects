#! /usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
class Students {
    constructor() {
        this.name = [];
        this.age = [];
        this.fatherName = [];
    }
    addstudent(name, age, fathername) {
        this.name.push(name),
            this.age.push(age),
            this.fatherName.push(fathername);
    }
}
let students = new Students();
async function startHere() {
    let start = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "hello Sir..How can we help you?",
        choices: ["Add Student", "View Student Details"]
    });
    if (start.select == "Add Student") {
        let stdName = await inquirer.prompt({
            type: "input",
            name: "stdName",
            message: "Enter Student Name Here..."
        });
        let stdFname = await inquirer.prompt({
            type: "input",
            name: "stdFName",
            message: "Enter Student Father Name "
        });
        let forAge = await inquirer.prompt({
            type: "input",
            name: "stdAge",
            message: "Enter Student Age "
        });
        console.log(chalk.green.bold("Thank You, Your admission is confirmed"));
        students.addstudent(stdName.stdName, forAge.stdAge, stdFname.stdFName);
        console.log(students);
    }
    if (start.select == "View Student Details") {
        console.log(chalk.red.bold("Sorry Sir, There is no students in our record "));
    }
}
startHere();
