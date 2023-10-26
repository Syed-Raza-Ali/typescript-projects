#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
let answers1;
let answers2;
let answers3;
async function startloop() {
    while (loop) {
        await displayMenuItem();
    }
}
startloop();
async function displayMenuItem() {
    answers1 = await inquirer.prompt([
        {
            type: "list",
            name: "menuOpt",
            choices: ['Add ToDo item', 'Delete ToDo item', 'Exit'],
            message: `Please select menu item: `
        }
    ]);
    console.log(answers1.menuOpt);
    switch (answers1.menuOpt) {
        case 'Add ToDo item':
            {
                await addTodo();
                break;
            }
            ;
        case 'Delete ToDo item':
            {
                await deleteTodo();
                break;
            }
            ;
        default: {
            loop = false;
            console.log("Exit Program");
            console.log("   -Thank You ! ");
            break;
        }
    }
}
async function addTodo() {
    answers2 = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: " Enter What to Do? "
        }
    ]);
    todos.push(answers2.todo);
    console.log(todos);
}
async function deleteTodo() {
    if (todos.length > 0) {
        answers3 = await inquirer.prompt([
            {
                type: "list",
                name: "menuOpt",
                choices: todos,
                message: "Please select ToDo for delete: "
            }
        ]);
        let i = 0;
        do {
            if (todos[i] === answers3.menuOpt) {
                todos.splice(i, 1);
                break;
            }
            i++;
        } while (i < todos.length);
        console.log(todos);
    }
    else {
        console.log("No ToDo item for delete. ");
    }
}
