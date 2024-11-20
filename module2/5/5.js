'use-strict'
const numbers = [];
let x = true;


while(x === true) {
    let number = parseInt(prompt("number"));

    if(numbers.includes(number)) {
        numbers.sort()
        console.log("The number has already been given!")
        console.log(numbers)
        x === false;
        break;
    } else {
        numbers.push(number)
    }
}

