'use strict';

//variables
const btn = document.querySelector('.js_btn');
let chosenNumb = document.querySelector('.js_input');
let pista = document.querySelector('.js_pista');
let attemps = document.querySelector('.js_attemps');
const resetBtn = document.querySelector('.js_btnReset');
let initialNumb = getRandomNumber(100);
let counter = 1;

//functions
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handleClickNumber(event) {
  event.preventDefault();
  console.log(`My random number is ${initialNumb}`);
  answer();
  countingCliks();
}
function handleClickNumber2(event) {
  if (event.keyCode === 13) {
    console.log(`My random number is ${initialNumb}`);
    answer();
    countingCliks();
  }
}
function answer() {
  const chosenNumbN = parseInt(chosenNumb.value);
  if (chosenNumbN === initialNumb) {
    writeTip('¡¡¡Has ganado campeona!!!');
    colorTextAdd('winner');
    colorTextRemove('cheating');
  } else if (chosenNumbN !== initialNumb) {
    if ((chosenNumbN > initialNumb) & (chosenNumbN <= 100)) {
      writeTip(' Pista: <span class="pista">Demasiado alto.</span>');
      colorTextRemove('cheating');
      colorTextRemove('winner');
    } else if ((chosenNumbN < initialNumb) & (chosenNumbN > 0)) {
      writeTip(' Pista: <span class="pista">Demasiado bajo.</span>');
      colorTextRemove('cheating');
      colorTextRemove('winner');
    } else {
      writeTip('El número debe estar entre 1 y 100.');
      colorTextAdd('cheating');
      colorTextRemove('winner');
    }
  }
}
function answerReset() {
  writeTip(' Pista: <span>Escribe el número y dale a Prueba</span>');
  colorTextRemove('winner');
  colorTextRemove('cheating');
}
function writeTip(message) {
  pista.innerHTML = message;
}
function countingCliks() {
  attemps.innerHTML = `Número de intentos: ${counter++}`;
}
function countingCliksReset() {
  debugger;
  counter = 0;
  attemps.innerHTML = `Número de intentos: ${counter++}`;
}
function colorTextAdd(a) {
  pista.classList.add(a);
}
function colorTextRemove(b) {
  pista.classList.remove(b);
}

function handleClickReset(ev) {
  ev.preventDefault();
  initialNumb = getRandomNumber(100);
  debugger;
  countingCliksReset();
  answerReset();
  chosenNumb.innerHTML = '';
}

//listeners
btn.addEventListener('click', handleClickNumber);
document.addEventListener('onkeydown', handleClickNumber2);
resetBtn.addEventListener('click', handleClickReset);
