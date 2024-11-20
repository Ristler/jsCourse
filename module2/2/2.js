'use-strict'
const participants = [];

ask = parseInt(prompt("How many will participate?"))


for(let i = 0; i < ask; i++) {
    participant = prompt("Name of participant");
    participants.push(participant)
}
participants.sort()
for( i = 0; i < participants.length; i++) {
document.querySelector("#target").innerHTML += `<li>${participants[i]}</li>` 
}

    
