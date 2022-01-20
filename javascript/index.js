const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minuto = chronometer.getMinutes();
  minDecElement.innerText = chronometer.computeTwoDigitNumber(minuto)[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(minuto)[1];
}

function printSeconds() {
  const segundos = chronometer.getSeconds();
  secDecElement.innerText = chronometer.computeTwoDigitNumber(segundos)[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(segundos)[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(split) {
  //criei uma li pelo JS
  const li = document.createElement('li');
  //mudei o conteudo do texto da li que eu acabei de criar
  li.innerText = split;
  //fiz o meu elemento de ol(splitisElements) adotar a li que eu criei antes
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerText = "START";
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
  btnRightElement.innerText = "RESET";
}

function setSplitBtn() {
  const split = chronometer.split();
  printSplit(split);
}

function setStartBtn() {
  chronometer.star(printTime);
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerText = "STOP";
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
  btnRightElement.innerText = "SPLIT";
}

function setResetBtn() {
  chronometer.reset();
  clearSplits();
  minDecElement.innerText = '0';
  minUniElement.innerText = '0';
  secDecElement.innerText = '0';
  secUniElement.innerText = '0';

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStartBtn();
  } else {
    setStopBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET'){
    setResetBtn();    
  } else {
    setSplitBtn();
  }
});
