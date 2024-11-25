
const form = document.querySelector('#tvmaze-form')
form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const inputValue = document.querySelector('input[name=q]').value

    console.log(inputValue)
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
        const jsonData = await response.json();
        console.log(jsonData)
    } catch (error) {
        console.log(error.message)
    }
})
