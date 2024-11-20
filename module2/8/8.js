'use-strict'

const names = ["Johnny", "DeeDee", "Joey", "Marky"];

function concat(array) {
    let concat = '';
    for (i = 0; i < names.length; i++) {
        concat += names[i]

    }
    document.querySelector("#target").innerHTML = concat
}
concat(names)
