'use-strict'

const numbers = [];

n1 = parseInt(prompt("Number 1"))
n2 = parseInt(prompt("Number 2"))
n3 = parseInt(prompt("Number 3"))
n4 = parseInt(prompt("Number 4"))
n5 = parseInt(prompt("Number 5"))

numbers.push(n1, n2, n3, n4, n5)

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i])

}

