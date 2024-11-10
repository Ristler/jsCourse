'use-strict';
classRoom = ""

const student = prompt("What is your name?")
const classIndex = Math.floor(Math.random() * 3)

switch (classIndex) {
    case 0:
        classRoom = "Gryffindor"
        break;
        
    case 1:
        classRoom = "Slytherin"
        break;
    case 2:
        classRoom = "Hufflepuff"
        break;
    case 3:
        classRoom = "Ravenclaw"
        break;

}
document.querySelector('#name').innerHTML = `${student}, you are ${classRoom}.`



