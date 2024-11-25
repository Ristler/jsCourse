'use strict';

const button = document.querySelector('button')
button.addEventListener('click', buttonListener)

function buttonListener(evt){
  alert('Button Clicked')
}
