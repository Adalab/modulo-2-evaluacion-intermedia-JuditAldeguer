'use strict';

//variables
const btn = document.querySelector('.js_btn');
const initialNumb = getRandomNumber(100);
const chosenNumb = document.querySelector('.js_input');
const pista = document.querySelector('.js_pista');
const span = document.querySelector('.js_span');
const attemps = document.querySelector('.js_attemps');
let counter = 1;

//functions
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handleClickNumber(event) {
  event.preventDefault();
  console.log(`Mi número aleatorio es ${initialNumb}`);
  debugger;
  answer();
  countingCliks();
}

function answer() {
  const chosenNumbN = parseInt(chosenNumb.value);

  if (chosenNumbN === initialNumb) {
    pista.innerHTML = 'Has ganado campeona!!!';
    pista.classList.add('winner');
  } else if (chosenNumbN !== initialNumb) {
    if ((chosenNumbN > initialNumb) & (chosenNumbN <= 100)) {
      span.innerHTML = ' Demasiado alto.';
      pista.classList.remove('winner');
      pista.classList.remove('cheating');
      span.classList.add('pista');
    } else if ((chosenNumbN < initialNumb) & (chosenNumbN >= 0)) {
      span.innerHTML = ' Demasiado bajo.';
      span.classList.add('pista');
      pista.classList.remove('winner');
      pista.classList.remove('cheating');
    } else {
      pista.innerHTML = 'El número debe estar entre 1 y 100.';
      pista.classList.add('cheating');
    }
  }
}

function countingCliks(event) {
  attemps.innerHTML = `Número de intentos: ${counter++}`;
}

//listeners
btn.addEventListener('click', handleClickNumber);
