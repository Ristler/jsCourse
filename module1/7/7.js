'use-strict';
response = ""
sum = 0
rolls = prompt("Number of dice rolls")
const dice = Math.floor(Math.random() * 6) + 1;

for (let i = 1; i <= rolls; i++) {
    const dice = Math.floor(Math.random() * 6) + 1;
    sum+=dice
    console.log("Throwing dice: "+ dice + "..")
    response = "Sum of dices: "+ sum
}
document.querySelector("#target").innerHTML = response 



