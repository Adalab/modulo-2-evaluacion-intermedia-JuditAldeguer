'use strict';

//variables
const btn = document.querySelector('.js_btn');
const initialNumb = getRandomNumber(100);
const chosenNumb = document.querySelector('js_input').innerHTML;

//functions
function handleClickNumber(event) {
  event.preventDefault();
  console.log(`Mi número aleatorio es ${initialNumb}`);
  debugger;
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//listeners
btn.addEventListener('click', handleClickNumber);
