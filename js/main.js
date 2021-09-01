'use strict';

//variables
const btn = document.querySelector('.js_btn');
const initialNumb = getRandomNumber(100);
const chosenNumb = document.querySelector('.js_input');
const pista = document.querySelector('.js_pista');
const attemps = document.querySelector('.js_attemps');
let counter = 1;

//functions
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handleClickNumber(event) {
  event.preventDefault();
  console.log(`Mi número aleatorio es ${initialNumb}`);
  answer();
  countingCliks();
}

function answer() {
  const chosenNumbN = parseInt(chosenNumb.value);
  if (chosenNumbN === initialNumb) {
    pista.innerHTML = 'Has ganado campeona!!!';
  } else if (chosenNumbN !== initialNumb) {
    if ((chosenNumbN > initialNumb) & (chosenNumbN <= 100)) {
      pista.innerHTML = 'Pista: Demasiado alto.';
    } else if ((chosenNumbN < initialNumb) & (chosenNumbN >= 0)) {
      pista.innerHTML = 'Pista: Demasiado bajo.';
    } else {
      pista.innerHTML = 'Pista: El número debe estar entre 1 y 100.';
    }
  }
}

function countingCliks(event) {
  debugger;
  attemps.innerHTML = `Número de intentos: ${counter++}`;
}

//listeners
btn.addEventListener('click', handleClickNumber);
