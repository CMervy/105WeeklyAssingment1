const prompt = require('prompt-sync')();
let gamemmode = Number(prompt(`Press 1 to play Max Score \nPress 2 to play Three-Out\n`))
if(gamemmode === 1){
    console.log(`You have chosen Max score`)
    let difficulty1 = Number(prompt(`Press 1 for Easy\nPress 2 for Medium\nPress 3 for Hard\n`))
    if(difficulty1 === 1){
        console.log(`You have chosen easy mode`)
        
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