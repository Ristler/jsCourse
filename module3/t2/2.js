'use strict';

const target = document.querySelector('#target')
const firstElement = document.createElement('li')
const secondElement = document.createElement('li')
const thirdElement = document.createElement('li')

secondElement.classList.toggle('my-item')

const firstText = document.createTextNode('First item')
const secondText = document.createTextNode('Second item')
const thirdText = document.createTextNode('Third item')


firstElement.append(firstText)
secondElement.append(secondText)
thirdElement.append(thirdText)

target.appendChild(firstElement)
target.appendChild(secondElement)
target.appendChild(thirdElement)