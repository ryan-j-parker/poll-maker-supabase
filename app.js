// import functions and grab DOM elements

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
import { getPolls, createPoll } from './fetch-utils.js';
import { renderPoll, renderOption } from './render-utils.js';

const pollForm = document.querySelector('poll-form');
const pastPolls = document.querySelector('past-polls');

const optionAPlusBtn = document.querySelector('option-a-plus');
const optionAMinusBtn = document.querySelector('option-a-minus');
const optionBPlusBtn = document.querySelector('option-b-plus');
const optionBMinusBtn = document.querySelector('option-b-minus');
const savePollBtn = document.querySelector('save-poll');

const pollDisplay = document.querySelector('poll-display');
const questionDisplay = document.querySelector('question-display');
const optionADisplay = document.getElementById('option-a-display');
const optionBDisplay = document.getElementById('option-b-display');


let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;

pollForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(pollForm);
  question = data.get('question-input');
  optionA = data.get('option-a-input');
  optionB = data.get('option-b-input');

  pollForm.reset();
  displayCurrentPoll();
  //console.log(question, 'post button event listener working');
});

optionAPlusBtn.addEventListener('click', () => {
  votesA++;
  displayCurrentPoll();
  //console.log(votesA);
});

optionAMinusBtn.addEventListener('click', () => {
  if (votesA > 0) {
    votesA--;
  }
  displayCurrentPoll();
});

optionBPlusBtn.addEventListener('click', () => {
  votesB++;
  displayCurrentPoll();
});

optionBMinusBtn.addEventListener('click', () => {
  if (votesB > 0) {
    votesB--;
  }
  displayCurrentPoll();
});

savePollBtn.addEventListener('click', async () => {

  const data = {
    question,
    optionA,
    optionB,
    votesA,
    votesB,
  };

  const response = await createPoll(data);
  question = '';
  optionA = '';
  optionB = '';
  votesA = 0;
  votesB = 0;

  displayAllPolls();

  displayCurrentPoll();
  //console.log('save poll btn working');
});

window.addEventListener('', async () => {
  await displayAllPolls();
  displayCurrentPoll();
});

function displayCurrentPoll() {
  pollDisplay.textContent = '';

  questionDisplay.textContent = question;
  optionADisplay.textContent = optionA;
  optionBDisplay.textContent = optionB;

  const pollEl = renderPoll({ question, optionA, optionB, votesA, votesB });
  pollEl.classList.add('current-poll');
  pollDisplay.append(pollEl);
  //console.log('display poll working');
}

async function displayAllPolls() {

  const polls = await getPolls();

  for (let poll of polls) {
    const pollEl = renderPoll(poll);

    pastPolls.append(pollEl);
  }
}

displayCurrentPoll();