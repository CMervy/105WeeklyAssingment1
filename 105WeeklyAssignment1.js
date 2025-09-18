const prompt = require('prompt-sync')();

// Choosing game mode
let gamemmode = Number(prompt(`Press 1 to play Max Score \nPress 2 to play Three-Out\n`))
console.log(`----------------------------\n`);

score = 0
// Max score
if(gamemmode === 1){
    console.log(`----------------------------\n`);
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
            console.log(`----------------------------\n`);

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
            console.log(`----------------------------\n`);

    }
}

console.log(`\n Final Score: ${score}`);

}
//Medium - Up to 2 digit add and dub, 1 digit mult, div, and mod
else if(difficulty1 === 2){
        console.log(`You have chosen Medium`)
for (let questions = 1; questions <= 20; questions++) {    

    // 1 = addition, 2 = subtraction, 3 = multiplication, 4 = division, 5 = modulus
    let operation = Math.floor(Math.random() * 5) + 1;
    let num1, num2;

    if(operation === 1 || operation === 2){
        num1 = Math.floor(Math.random() * 99) + 1;
        num2 = Math.floor(Math.random() * 99) + 1;
    }
    else{
    num1 = Math.floor(Math.random() * 9) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;
    }

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
            console.log(`----------------------------\n`);

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
            console.log(`----------------------------\n`);

    }
    // Multiplication
    else if (operation === 3) {
    let answer = prompt(`${questions}) ${num1} * ${num2} = ? (Type any word to skip): `);
    let numberAnswer = Number(answer);

    if (isNaN(numberAnswer)) {
        console.log(`You chose to skip. Your score: ${score} + 0 = ${score}\n`);
    } else if (numberAnswer === num1 * num2) {
        console.log(`Correct! Your score: ${score} + 10 = ${score + 10}\n`);
        score += 10;
    } else {
        console.log(`Wrong! Your score: ${score} - 5 = ${score - 5}\n`);
        score -= 5;
    }
        console.log(`----------------------------\n`);

}
    // Division
    else if (operation === 4) {
    

    let answer = prompt(`${questions}) ${num1} / ${num2} = ? (Type any word to skip): `);
    let numberAnswer = Number(answer);

    if (isNaN(numberAnswer)) {
        console.log(`You chose to skip. Your score: ${score} + 0 = ${score}\n`);
    } else if (numberAnswer === num1 / num2) {
        console.log(`Correct! Your score: ${score} + 10 = ${score + 10}\n`);
        score += 10;
    } else {
        console.log(`Wrong! Your score: ${score} - 5 = ${score - 5}\n`);
        score -= 5;
    }
        console.log(`----------------------------\n`);

}
    // Modulus
    else{
        let answer = prompt(`${questions}) ${num1} % ${num2} = ? (Type any word to skip): `);
        let numberAnswer = Number(answer);

        if (isNaN(numberAnswer)) {
        console.log(`You chose to skip. Your score: ${score} + 0 = ${score}\n`);
}       else if (numberAnswer === num1 % num2) {
        console.log(`Correct! Your score: ${score} + 10 = ${score + 10}\n`);
        score += 10;
}       else {
        console.log(`Wrong! Your score: ${score} - 5 = ${score - 5}\n`);
        score -= 5;
}
        console.log(`----------------------------\n`);

    }

}

console.log(`\n Final Score: ${score}`);}
}

            
        



// // Hard - Up to 3 digit add, sub. Mult, div, mod - Num1 2 digit, Num2 1 digit
    else if(difficulty1 === 3){
        console.log(`You have chosen Medium`)
for (let questions = 1; questions <= 20; questions++) {    

    // 1 = addition, 2 = subtraction, 3 = multiplication, 4 = division, 5 = modulus
    let operation = Math.floor(Math.random() * 5) + 1;
    let num1, num2;

    if(operation === 1 || operation === 2){
        num1 = Math.floor(Math.random() * 99) + 1;
        num2 = Math.floor(Math.random() * 99) + 1;
    }
    else{
    num1 = Math.floor(Math.random() * 99) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;
    }

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
            console.log(`----------------------------\n`);

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
            console.log(`----------------------------\n`);

    }
    // Multiplication
    else if (operation === 3) {
    let answer = prompt(`${questions}) ${num1} * ${num2} = ? (Type any word to skip): `);
    let numberAnswer = Number(answer);

    if (isNaN(numberAnswer)) {
        console.log(`You chose to skip. Your score: ${score} + 0 = ${score}\n`);
    } else if (numberAnswer === num1 * num2) {
        console.log(`Correct! Your score: ${score} + 10 = ${score + 10}\n`);
        score += 10;
    } else {
        console.log(`Wrong! Your score: ${score} - 5 = ${score - 5}\n`);
        score -= 5;
    }
        console.log(`----------------------------\n`);

}
    // Division
    else if (operation === 4) {
    

    let answer = prompt(`${questions}) ${num1} / ${num2} = ? (Type any word to skip): `);
    let numberAnswer = Number(answer);

    if (isNaN(numberAnswer)) {
        console.log(`You chose to skip. Your score: ${score} + 0 = ${score}\n`);
    } else if (numberAnswer === num1 / num2) {
        console.log(`Correct! Your score: ${score} + 10 = ${score + 10}\n`);
        score += 10;
    } else {
        console.log(`Wrong! Your score: ${score} - 5 = ${score - 5}\n`);
        score -= 5;
    }
        console.log(`----------------------------\n`);

}
    // Modulus
    else{
        let answer = prompt(`${questions}) ${num1} % ${num2} = ? (Type any word to skip): `);
        let numberAnswer = Number(answer);

        if (isNaN(numberAnswer)) {
        console.log(`You chose to skip. Your score: ${score} + 0 = ${score}\n`);
}       else if (numberAnswer === num1 % num2) {
        console.log(`Correct! Your score: ${score} + 10 = ${score + 10}\n`);
        score += 10;
}       else {
        console.log(`Wrong! Your score: ${score} - 5 = ${score - 5}\n`);
        score -= 5;
}
        console.log(`----------------------------\n`);

    }

    
}

console.log(`\n Final Score: ${score}`);}




// // Three - out
    else if(gamemmode === 2){
    console.log(`You have chosen Three-Out`)
    outs = 0
    let difficulty2 = Number(prompt(`Press 1 for Easy\nPress 2 for Medium\nPress 3 for Hard\n`))

    //Easy - Only addition and subtraction numbers 1-9
    if(difficulty2 === 1){
        console.log(`You have chosen easy mode`)
        while(outs < 3){
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
            console.log(`----------------------------\n`);

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
            console.log(`----------------------------\n`);

    }
}

console.log(`\n Final Score: ${score}`);

}
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

// This else statement is if they do not choose Three Out or Max Score
//     else{
//     console.log(`That is not a valid option. Please restart.`)
// }