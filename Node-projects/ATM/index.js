#! /usr/bin/env node
//ATM
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const silentDisplay = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function display() {
    let rainbowTitle = chalkAnimation.rainbow("Please wait");
    await silentDisplay();
    rainbowTitle.stop();
}
;
await display();
let accBalance = 5000;
let userInfo = await inquirer.prompt({
    name: "cash",
    type: "number",
    message: " Enter your cash value"
});
if (userInfo.cash <= accBalance) {
    console.log(chalk.greenBright(`You have succesfully withdraw: ${userInfo.cash} Rs`));
    console.log(chalk.blueBright(`Your remaining balance is :${accBalance - userInfo.cash} Rs`));
}
else {
    console.log(chalk.redBright("Insuficient balance"));
    console.log(chalk.blueBright(`Your current balance is :${accBalance} Rs`));
}
;
