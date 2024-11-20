'use-strict'
const numbers = [];
number = parseInt(prompt("Number"))
numbers.push(number)

while(number !== 0) {
    number = parseInt(prompt("Number"))
    if(number > 0) {
        numbers.push(number)

    }
    numbers.sort((a,b) => b-a);
    console.log(numbers)
}