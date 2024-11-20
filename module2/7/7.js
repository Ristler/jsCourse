'use-strict'
const numbers = []
const userInput = parseInt(prompt("How many sides?"))

function diceRoll(amount) {
    while (!numbers.includes(amount)) {
        let randomDice = Math.floor(Math.random() * amount) + 1;
        numbers.push(randomDice)
    }
    document.querySelector("#target").innerHTML = numbers.map(number => `<li>${number}</li>`).join('')
}
diceRoll(userInput)