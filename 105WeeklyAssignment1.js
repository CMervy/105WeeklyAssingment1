const prompt = require('prompt-sync')();

// Chosing game mode
let gamemmode = Number(prompt(`Press 1 to play Max Score \nPress 2 to play Three-Out\n`))
score = 0
// Max score
if(gamemmode === 1){
    console.log(`You have chosen Max score`)
    let difficulty1 = Number(prompt(`Press 1 for Easy\nPress 2 for Medium\nPress 3 for Hard\n`))
    // Easy - Only addition and subtraction numbers 1-9
    if(difficulty1 === 1){
        console.log(`You have chosen easy mode`)
        
        for(questions = 1; questions<=20; questions++){
            // num1 and num2 are picking 2 numbers between 1 and 9 to be added or subtracted
            Number(num1 = (int)(Math.random()* 9) + 1)
            Number(num2 = (int)(Math.random()* 9) + 1)
            // operation is a variable that picks addition or subtraction, when doing 
            //addition, multiplication, division, and subtraction, 2 will be changed to 4
            Number(operation = (int(Math.random)()* 2) + 1)
            // if operation === 1 addition
            if(operation === 1){
                let answer = Number(prompt(questions + `) ${num1} + ${num2}`))
                //Increases score by 10 if correct, subtracts 5 if wrong
                if(answer === num1 + num2){
                    score+=10
                }
                else{
                    score-=5
                }
            }
            // if operation === 2 (this is the only other choice since it picks 1 or 2) subtract
            else{
                let answer = Number(prompt(questions + `) ${num1} - ${num2}`))
            }
            
        }
    }
    else if(difficulty1 === 2){
        console.log(`You have chosen Medium`)
    }
    else if(difficulty1 === 3){
        console.log(`You have chosen Hard`)
    }
    else{
        console.log(`That is not a valid option. Please restart`)
    }
}
// Three - out
else if(gamemmode === 2){
    console.log(`You have chosen Three-Out`)
    let difficulty2 = Number(prompt(`Press 1 for Easy\nPress 2 for Medium\nPress 3 for Hard\n`))
    if(difficulty2 === 1){
        console.log(`You have chosen easy mode`)
    }
    else if(difficulty2 === 2){
        console.log(`You have chosen Medium`)
    }
    else if(difficulty2 === 3){
        console.log(`You have chosen Hard`)
    }
    else{
        console.log(`That is not a valid option. Please restart.`)
    }
}
else{
    console.log(`That is not a valid option. Please restart.`)
}