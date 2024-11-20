'use-strict'

//Write a function that returns a random dice roll between 1 and 6. 
//The function should not have any parameters. 
//Write a main program that rolls the dice until the result is 6. 
//The main program should print out the result of each roll in an unordered list

const numbers = []
function diceRoll() {
    while (!numbers.includes(6)) {
        let randomDice = Math.floor(Math.random() * 6) + 1;
        numbers.push(randomDice)
    }
    document.querySelector("#target").innerHTML = numbers.map(number => `<li>${number}</li>`).join('')
}
diceRoll()