'use strict';

const calculation = document.querySelector('#calculation')
const result = document.querySelector('#result')
const button = document.querySelector('#start')
let number1;
let number2;
let sum;

calculation.addEventListener('input', doMath)
button.onclick = x;

function x() {
    result.innerHTML = sum
}
function doMath() {
    let operus = document.getElementById("calculation").value;
    if(operus.includes('+')){
        const parts = operus.split('+')
        sum = parseInt(parts[0])+parseInt(parts[1])
        console.log("Sum is: ", sum)
    }
    if(operus.includes('-')){
        const parts = operus.split('-')
        sum = parseInt(parts[0])-parseInt(parts[1])
        console.log("Sub is: ", sum)
       
    }
    if(operus.includes('*')){
        const parts = operus.split('*')
        sum = parseInt(parts[0])*parseInt(parts[1])
        console.log("Multi is: ", sum)
       
    }
    if(operus.includes('/')){
        const parts = operus.split('/')
        sum = parseInt(parts[0])/parseInt(parts[1])
        console.log("Divided is: ", sum)
    }
}
