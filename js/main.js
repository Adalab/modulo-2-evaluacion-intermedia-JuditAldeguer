'use strict';

//variables
const btn = document.querySelector('.js_btn');
const initialNumb = getRandomNumber();

//functions
function handleClickNumber(event) {
  event.preventDefault();
  debugger;
  console.log(`Mi número aleatorio es ${initialNumb}`);
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//listeners
btn.addEventListener('click', handleClickNumber);
