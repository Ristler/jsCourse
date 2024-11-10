
'use-strict';
let response = ""

const year = parseInt(prompt("Give the year you want to check"))

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    response = "is a leap year!"

} else {
    response = "is not a leap year"
}
document.querySelector('#target').innerHTML = response;

