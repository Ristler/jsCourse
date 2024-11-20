'use-strict'
const dogs = [];


for(let i = 1; i <= 6; i++) {
    const dog = prompt("Name of the dog")
    dogs.push(dog)
    console.log(i)
}

dogs.sort();
for (let i = dogs.length - 1; i >= 0; i--) {
document.querySelector("#target").innerHTML += `<li>${dogs[i]}</li>` 

}
