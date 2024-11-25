'use strict';

const number1 = document.querySelector('#num1')
const number2 = document.querySelector('#num2')
const operation = document.querySelector('#operation')
const button = document.querySelector('#start')
const result = document.querySelector('#result')

let mode = 'add'
let num1;
let num2;
let sum;

number1.addEventListener('input', n1)
number2.addEventListener('input', n2)
operation.onclick = operationSelect;
button.onclick = calculate;

function n1() {
    num1 = document.getElementById("num1").value;
    console.log(num1)

}
function n2() {
    num2 = document.getElementById("num2").value;
    console.log(num2)

}
function operationSelect() {
    mode = document.getElementById("operation").value
    console.log(mode)
 
}
function calculate() {
    if(mode === 'add') {
        sum = parseInt(num1) + parseInt(num2)
        console.log("Sum number is: ", sum)
    }
    if(mode === 'sub') {
        sum = parseInt(num1) - parseInt(num2)
        console.log("Subtracted number is: ", sum)
    }
    if(mode === 'multi') {
        sum = parseInt(num1) * parseInt(num2)
        console.log("Multiplied number is: ", sum)
    }
    if(mode === 'div') {
        sum = parseInt(num1) / parseInt(num2)
        console.log("Divided number is: ", sum)
    }
    result.textContent = sum
}
