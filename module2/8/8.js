'use-strict'

const names = ["Johnny", "DeeDee", "Joey", "Marky"];

function concat(array) {
    document.querySelector("#target").innerHTML = names.map(name => `${name}`).join('')
}
concat(names)