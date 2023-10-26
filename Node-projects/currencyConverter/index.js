#! /usr/bin/env node
import inquirer from "inquirer";
let convertion = {
    "GBP": {
        "GBP": 1.0000,
        "USD": 1.2200,
        "EUR": 1.5000,
        "AUD": 1.9397,
        "PKR": 358.6500,
    },
    "EUR": {
        "GBP": 0.8634,
        "USD": 1.1012,
        "EUR": 1.0000,
        "AUD": 1.6753,
        "PKR": 310.2200
    },
    "USD": {
        "GBP": 0.7842,
        "USD": 1.0000,
        "EUR": 0.9081,
        "AUD": 1.5216,
        "PKR": 290.7200
    },
    "PKR": {
        "GBP": 0.0027,
        "USD": 0.0036,
        "EUR": 0.0032,
        "AUD": 0.0054,
        "PKR": 1.0000
    },
    "AUD": {
        "GBP": 0.0082,
        "USD": 0.0064,
        "EUR": 0.0061,
        "AUD": 1.0000,
        "PKR": 185.9900
    }
};
async function startLoop() {
    let again;
    do {
        await convertAmount();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "count",
                choices: ["Yes", "No"]
            }
        ]);
    } while (again.count == "Yes");
    {
        console.log("   -Thank You ");
    }
}
startLoop();
async function convertAmount() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["GBP", "USD", "EUR", "AUD", "PKR"],
            message: "Please select currency from: "
        },
        {
            type: "list",
            name: "to",
            choices: ["GBP", "USD", "EUR", "AUD", "PKR"],
            message: "Please select currency to: "
        },
        {
            type: "number",
            name: "amount",
            message: "Please enter your amount: "
        }
    ]);
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = convertion[from][to] * amount;
        console.log(`The converted amount of ${amount} ${from} in ${to} is ${result}`);
    }
    else {
        console.log("   -Invalid input ");
    }
}
