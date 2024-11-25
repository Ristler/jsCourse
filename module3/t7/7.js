'use strict';

const hover = document.querySelector('#trigger')
const img = document.querySelector('#target')

hover.addEventListener('mouseover', changeImg)

function changeImg(evt) {
    console.log("lol")
 
    if(img.src.includes("img/picA.jpg")) {
        img.src = "img/picB.jpg"
    }
    else if(img.src.includes("img/picB.jpg")) {
        img.src = "img/picA.jpg"
    }
}