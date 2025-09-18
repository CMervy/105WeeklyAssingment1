const prompt = require('prompt-sync')();

// Choosing game mode
let gamemmode = Number(prompt(`Press 1 to play Max Score \nPress 2 to play Three-Out\n`))
score = 0
// Max score
if(gamemmode === 1){
    console.log(`You have chosen Max score`)
    let difficulty1 = Number(prompt(`Press 1 for Easy\nPress 2 for Medium\nPress 3 for Hard\n`))
    // Easy - Only addition and subtraction numbers 1-9
    if(difficulty1 === 1){
        console.log(`You have chosen easy mode`)
        
    for (let questions = 1; questions <= 20; questions++) {
    // Random numbers between 1 and 9
    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;

    // 1 = addition, 2 = subtraction
    let operation = Math.floor(Math.random() * 2) + 1;

    if (operation === 1) {
        let answer = prompt(`${questions}) ${num1} + ${num2} = ? (Type any word to skip): `);
        let numberAnswer = Number(answer);

        if (isNaN(numberAnswer)) {
            console.log(`Skipped. Your score: ${score} + 0 = ${score}\n`);
        } else if (numberAnswer === num1 + num2) {
            console.log(`Correct! Your score: ${score} + 10 = ${score + 10}\n`);
            score += 10;
        } else {
            console.log(`Wrong! Your score: ${score} - 5 = ${score - 5}\n`);
            score -= 5;
        }
    } else if (operation === 2) {
        let answer = prompt(`${questions}) ${num1} - ${num2} = ? (Type any word to skip): `);
        let numberAnswer = Number(answer);

        if (isNaN(numberAnswer)) {
            console.log(`You've chosen skip. Your score: ${score} + 0 = ${score}\n`);
        } else if (numberAnswer === num1 - num2) {
            console.log(`Correct! Your score: ${score} + 10 = ${score + 10}\n`);
            score += 10;
        } else {
            console.log(`Wrong! Your score: ${score} - 5 = ${score - 5}\n`);
            score -= 5;
        }
    }
}

console.log(`\n Final Score: ${score}`);}}
            
        
    // Level 2 - 2 digit addition and subtraction questions and one digit multiplication, division, and modulus (%) questions
else if(difficulty1 === 2){
        console.log(`You have chosen Medium`)
for (let questions = 1; questions <= 20; questions++) {
    // Random numbers between 1 and 9
    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;

    // 1 = addition, 2 = subtraction, 3 = multiplication, 4 = division, 5 = modulus
    let operation = Math.floor(Math.random() * 2) + 1;

    // Addition
    if (operation === 1) {
        let answer = prompt(`${questions}) ${num1} + ${num2} = ? (Type any word to skip): `);
        let numberAnswer = Number(answer);

        if (isNaN(numberAnswer)) {
            console.log(`Skipped. Your score: ${score} + 0 = ${score}\n`);
        } else if (numberAnswer === num1 + num2) {
            console.log(`Correct! Your score: ${score} + 10 = ${score + 10}\n`);
            score += 10;
        } else {
            console.log(`Wrong! Your score: ${score} - 5 = ${score - 5}\n`);
            score -= 5;
        }
        //Subtraction
    } else if (operation === 2) {
        let answer = prompt(`${questions}) ${num1} - ${num2} = ? (Type any word to skip): `);
        let numberAnswer = Number(answer);

        if (isNaN(numberAnswer)) {
            console.log(`You've chosen skip. Your score: ${score} + 0 = ${score}\n`);
        } else if (numberAnswer === num1 - num2) {
            console.log(`Correct! Your score: ${score} + 10 = ${score + 10}\n`);
            score += 10;
        } else {
            console.log(`Wrong! Your score: ${score} - 5 = ${score - 5}\n`);
            score -= 5;
        }
    }
}

console.log(`\n Final Score: ${score}`);}


// Level 3 - Up to 2 digit 
    else if(difficulty1 === 3){
        console.log(`You have chosen Hard`)
    }
    else{
        console.log(`That is not a valid option. Please restart`)
    }

// Three - out
    if(gamemmode === 2){
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