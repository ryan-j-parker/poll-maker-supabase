// import functions and grab DOM elements

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
import { renderPoll } from './render-utils.js';

const pollForm = document.querySelector('poll-form');
const pastPolls = document.querySelector('past-polls');
const pollDisplay = document.querySelector('poll-display');

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
});

function displayCurrentPoll() {

  pastPolls.textContent = '';

  for (let poll of pastPolls) {
    const pollEl = renderPoll(poll);
  
    pastPolls.append(pollEl);
  }
}
