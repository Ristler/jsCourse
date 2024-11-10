'use-strict';

const number1 = parseInt(prompt("First number"))
const number2 = parseInt(prompt("Second number"))
const number3 = parseInt(prompt("Third number"))

sum = number1+number2+number3
average = sum / 3
product = number1*number2*number3

console.log("Sum of numbers is: " + sum)
console.log("Product: ", number1*number2*number3)
console.log("Average: ", average)

document.querySelector('#sum').innerHTML = "Sum of numbers is: "+sum;
document.querySelector('#average').innerHTML = "Average of numbers is: "+average;
document.querySelector('#product').innerHTML = "Product of numbers is : "+product;
