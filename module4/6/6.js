
const form = document.querySelector('#chuckForm')
let result = document.querySelector('#result')


form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const inputValue = document.querySelector('input[joke=q]').value
    console.log(inputValue)
    result.innerHTML = ''

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${inputValue}`)
        const jsonData = await response.json();
        console.log(jsonData.result[0].value)

        for(let i = 0; i < jsonData.result.length; i++) {
            let articleElement = document.createElement('article')
            let jokeElement = document.createElement('p')

            jokeElement.append(jsonData.result[i].value)
            console.log("Whatsup ", jsonData.result[i].value)

            articleElement.appendChild(jokeElement)
            result.appendChild(articleElement)
        }
    } catch (error) {
        console.log(error.message)

    }
})