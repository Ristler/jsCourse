'use strict';

const calculation = document.querySelector('#calculation')
const operators = ["+", "-", "*", "/"]
let mode;
let number1;
let number2;

calculation.addEventListener('input', doMath)

function doMath() {
    let operus = document.getElementById("calculation").value;
    let numbers = operus.split('');
    //let operator = numbers[1]


    //SET THE OPERATOR
    if(operus.includes('+')){
        console.log("Its addition")
        mode = "+"
    }
    if(operus.includes('-')){
        console.log("Its subtraction")
        mode = '-'
    }
    if(operus.includes('*')){
        console.log("Its multiply")
        mode = '*'
    }
    if(operus.includes('/')){
        console.log("Its divide")
        mode = '/'
    }

    else if(!operus[1].includes(operators)) {

        number1 = operus[0] + operus[1]
        console.log(number1)
    }
    }
function find() {
    let operus = document.getElementById("calculation").value;
    for(let x in operus) {
        console.log("loooolol". operus[x])
    }
}
find()