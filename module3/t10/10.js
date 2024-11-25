const form = document.querySelector('#source')
const name = document.querySelector('input[name=firstname]')
const lastname = document.querySelector('input[name=lastname]')
const p = document.querySelector('#target')

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    p.innerText = `${name.value} ${lastname.value}`
})
