'use-strict'
let response = ""


nro = parseInt(prompt("Number"))
if (nro === 2) {
    response = "Is a prime number!";
}

for(i = 2; i <= nro - 1; i++) {
   
if (nro % i === 0) {
    response = "Is not a prime number!";
    break;

} else {
    
    response = "Is a prime number!";
}
}

document.querySelector("#target").innerHTML = response


