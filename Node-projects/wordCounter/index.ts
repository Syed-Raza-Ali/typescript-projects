#! /usr/bin/env node
import inquirer from "inquirer";

async function startLoop(){
    do {
        await getSentence();
        var again = await inquirer.prompt([
            {
                type: "list",
                name: "loop",
                choices: ["Yes" , "No"],
                message: "Do you want to continue: "
            }
        ])
    }while(again.loop === "Yes"){
        console.log("   -Thank You")
    }
}
startLoop();

async function getSentence(){
    const answer:{
        sentence: string
    } = await inquirer.prompt([
        {
            type: "input",
            name: "sentence",
            message: "Please write your paragraph to count words: "
        }
    ]);
    console.log(`Word count in your paragraph is ${wordcount(answer.sentence.trim())}`)
}
function wordcount(sent : string): number{
    if (sent.length > 0){
        const words = sent.split(" ");
        console.log(words);
        return words.length
    }else{
        return 0;
    }
}

























