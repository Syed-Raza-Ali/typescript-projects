#! /usr/bin/env node
// Guess the number (Game)
import chalk from "chalk";
import inquirer from "inquirer";
for (let i = 0; i < 3; i++) {
    let fromNum = Math.floor(Math.random() * 10);
    let user = await inquirer.prompt({
        name: "number01",
        type: "number",
        message: "Guess the number :"
    });
    // console.log(user)
    if (fromNum == parseInt(user.number01))
        console.log(chalk.bold.blueBright("congratulations you won"));
    else {
        console.log(chalk.bold.redBright("Oops! Better luck next time"));
    }
}
