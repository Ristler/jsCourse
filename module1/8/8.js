'use-strict'
const leapYears = []

const startYear = parseInt(prompt("Start year"));
const endYear = parseInt(prompt("End year"))

function checkYears() {
        for(i = startYear; i <= endYear; i++) {

        if(i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
        leapYears.push(i)
        
    }   
}
        for(i = 0; i < leapYears.length; i++) {
        document.querySelector("#target").innerHTML += `<li>${leapYears[i]}</li>` 
        console.log(leapYears[i])
    }
}


checkYears()






