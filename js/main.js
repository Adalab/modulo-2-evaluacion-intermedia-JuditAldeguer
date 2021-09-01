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
    pista.classList.remove('cheating');
  } else if (chosenNumbN !== initialNumb) {
    if ((chosenNumbN > initialNumb) & (chosenNumbN <= 100)) {
      pista.innerHTML =
        ' Pista: <span class="js_span pista">Demasiado alto.</span>';
      pista.classList.remove('winner');
      pista.classList.remove('cheating');
    } else if ((chosenNumbN < initialNumb) & (chosenNumbN >= 0)) {
      pista.innerHTML =
        ' Pista: <span class="js_span pista">Demasiado bajo.</span>';
      pista.classList.remove('winner');
      pista.classList.remove('cheating');
    } else {
      pista.innerHTML = 'El número debe estar entre 1 y 100.';
      pista.classList.add('cheating');
      pista.classList.remove('winner');
    }
  }
}

function countingCliks() {
  attemps.innerHTML = `Número de intentos: ${counter++}`;
}

//listeners
btn.addEventListener('click', handleClickNumber);
