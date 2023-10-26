#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Students {
    name: string
    constructor(n: string) {
        this.name = n
    }
}
class Person {
    student: Students[] = []
    teacher: Students[] = []
    addStudents(obj: Students) {
        this.student.push(obj)
    }
    addteacher(obj: Students) {
        this.teacher.push(obj)
    }
}

const persons = new Person()

const programStart = async (persons: Person) => {
    console.log(chalk.bold.green(" Welcome Guest "))
    const ans = await inquirer.prompt({
        type: "list",
        message: "Who do yo want to talk to? ",
        name: "select",
        choices: ["TEACHER", "STUDENT"]
    })
    if (ans.select == "TEACHER") {
        const ans = await inquirer.prompt({
            type: "list",
            message: "Which teacher do yo want to talk",
            name: "teacher",
            choices: ["Sir Sehrosh", "Miss Shabana", "Other"]
        })

        if (ans.teacher == "Sir Sehrosh") {
            console.log("Hello i am 'Sir Sehrosh', And i am fine, Thank you ")
        }
        else if (ans.teacher == "Miss Shabana") {
            console.log(`Hello i am 'Miss Shabana', And i am fine, Thank you  `)
        }

        else if (ans.teacher == "Other") {
            const ans = await inquirer.prompt({
                name: 'newtea',
                type: "input",
                message: "Enter Student Name"

            })
            const nametea = new Students(ans.newtea)
            persons.addteacher(nametea)
            console.log(`Hello i am ${ans.newtea} And I am fine, Thank you`)
        }

    }


    if (ans.select == "STUDENT") {
        const ans = await inquirer.prompt({
            type: "list",
            message: "Which student do yo want to talk",
            name: "student",
            choices: ["Raza", "Hasan", "Shoaib", "Other"]

        })
        if (ans.student == "Raza") {
            console.log(`Hello i am 'Raza', And i am fine, Thank you `)
        }
        else if (ans.student == "Hasan") {
            console.log(`Hello i am 'Hasan', And i am fine, Thank you  `)
        }
        else if (ans.student == "Shoaib") {
            console.log(`Hello i am 'Shoaib', And i am fine, Thank you   `)
        }
        else if (ans.student == "Other") {
            const ans = await inquirer.prompt({
                name: 'newStd',
                type: "input",
                message: "Enter Student Name"

            })
            const name = new Students(ans.newStd)
            persons.addStudents(name)
            console.log(`Hello i am ${name.name} And I am fine, Thank you`)
        }

    }
}


programStart(persons)



























