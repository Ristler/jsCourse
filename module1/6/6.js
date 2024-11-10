'use-strict';

response = ""
const ask = confirm("Should i calculate the square root?")

if (ask == true) {
    const number = parseInt(prompt("Give me a number"));
    if(number < 0) {
        response = "The square root of a negative number is not defined"
    } else {
    calc = Math.sqrt(number)
    response = "The calculated value is: "+ calc
}
}
if (ask == false) {
    response = "The square root is not calculated."

}
document.querySelector("#target").innerHTML = response;