'use strict';

//variables
const btn = document.querySelector('.js_btn');
const initialNumb = getRandomNumber(100);
const chosenNumb = document.querySelector('.js_input');
const pista = document.querySelector('.js_pista');

//functions
function handleClickNumber(event) {
  event.preventDefault();
  console.log(`Mi número aleatorio es ${initialNumb}`);
  debugger;
  answer();
  numAttemps();
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function answer() {
  const chosenNumbN = parseInt(chosenNumb.value);
  if (chosenNumbN === initialNumb) {
    pista.innerHTML = 'Pista: Es correcto.';
  } else if (chosenNumbN !== initialNumb) {
    pista.innerHTML = 'Pista: NO es correcto.';
  }
}

function numAttemps() {
  console.log('In process');
}

//listeners
btn.addEventListener('click', handleClickNumber);
