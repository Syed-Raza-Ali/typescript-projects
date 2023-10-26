#! /usr/bin/env node
import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
class Customer {
    constructor(fName, lName, age, gender, mobNo, accNo) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mobNo;
        this.accNumber = accNo;
    }
}
class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addCustomer(obj) {
        this.customer.push(obj);
    }
    addAccNo(obj) {
        this.account.push(obj);
    }
    transaction(accObj) {
        let newAccount = this.account.filter((acc) => acc.accNumber !== accObj.accNumber);
        this.account = [...newAccount, accObj];
    }
}
let myBank = new Bank();
for (let i = 1; i <= 3; i++) {
    let fName = faker.person.firstName("male");
    let lName = faker.person.lastName();
    let num = Math.floor(Math.random() * 3162598101);
    const cus = new Customer(fName, lName, 19 * i, "male", num, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccNo({ accNumber: cus.accNumber, balance: 100 * i });
}
// console.log(myBank)
const silentDisplay = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function display() {
    let rainbowTitle = chalkAnimation.rainbow(" ---- Hello Respected Customer, Welcome to Meezan Bank ---- "); // start animation
    await silentDisplay();
    rainbowTitle.stop();
}
await display();
async function bankService(bank) {
    let service = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Dear customer, Please select the Service",
        choices: ["View Balance", "Cash Withraw", "Cash Deposit"]
    });
    if (service.select == "View Balance") {
        let res = await inquirer.prompt({
            type: "input",
            name: "number",
            message: "Dear Customer, Please enter your account number"
        });
        let account = myBank.account.find((acc) => acc.accNumber == res.number);
        let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
        console.log(chalk.bold.blue(`Welcome ${name?.firstName} ${name?.lastName}`));
        if (!account) {
            console.log(chalk.red.bold.italic("Invalid Account Number"));
        }
        if (account) {
            let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
            console.log(`Dear ${chalk.green.bold(name?.firstName)} ${chalk.green.bold(name?.lastName)} your account balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
        }
    }
    if (service.select == "Cash Withraw") {
        let res = await inquirer.prompt({
            type: "input",
            name: "number",
            message: "Dear Customer, Please enter your account number"
        });
        let account = myBank.account.find((acc) => acc.accNumber == res.number);
        if (!account) {
            console.log(chalk.red.bold.italic("Invalid Account Number"));
        }
        if (account) {
            let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
            console.log(chalk.bold.blue(`Welcome ${name?.firstName} ${name?.lastName}`));
            let ans = await inquirer.prompt({
                type: "number",
                message: "Please enter your withraw amount",
                name: "rupee"
            });
            let newBalance = account.balance - ans.rupee;
            bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            console.log(`Dear ${chalk.bold.green(name?.firstName)} You have Succesfully Withdraw $${chalk.bold.green(ans.rupee)} And your Current balance is $${chalk.bold.green(newBalance)}`);
        }
    }
    if (service.select == "Cash Deposit") {
        let res = await inquirer.prompt({
            type: "input",
            name: "number",
            message: "Dear Customer, Please enter your account number"
        });
        let account = myBank.account.find((acc) => acc.accNumber == res.number);
        if (!account) {
            console.log(chalk.red.bold.italic("Invalid Account Number"));
        }
        if (account) {
            let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
            console.log(chalk.bold.blue(`Welcome ${name?.firstName} ${name?.lastName}`));
            let ans = await inquirer.prompt({
                type: "number",
                message: "Please enter your withraw amount",
                name: "rupee"
            });
            let newBalance = account.balance + ans.rupee;
            bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            console.log(`Dear ${chalk.bold.green(name?.firstName)} You have Succesfully Deposit $${chalk.bold.green(ans.rupee)} And your Current balance is $${chalk.bold.green(newBalance)}`);
        }
    }
}
bankService(myBank);
