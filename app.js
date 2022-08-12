import { getPolls, createPoll } from './fetch-utils.js';
import { renderPoll } from './render-utils.js';

const pollForm = document.getElementById('poll-form');
const pastPollsEl = document.getElementById('past-polls');

const optionAPlusBtn = document.getElementById('option-a-plus');
const optionAMinusBtn = document.getElementById('option-a-minus');
const optionBPlusBtn = document.getElementById('option-b-plus');
const optionBMinusBtn = document.getElementById('option-b-minus');
const savePollBtn = document.getElementById('save-poll');

const pollDisplay = document.getElementById('poll-display');

let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;

pollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(pollForm);

    const userQuestion = data.get('question-input');
    const userOptionA = data.get('option-a-input');
    const userOptionB = data.get('option-b-input');

    question = userQuestion;
    optionA = userOptionA;
    optionB = userOptionB;

    pollForm.reset();
    renderPoll();
    displayCurrentPoll();
});

optionAPlusBtn.addEventListener('click', () => {
    votesA++;
    displayCurrentPoll();
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
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB,
    };

    await createPoll(data);

    displayAllPolls();

    question = '';
    optionA = '';
    optionB = '';
    votesA = 0;
    votesB = 0;

    displayCurrentPoll();
});

window.addEventListener('', async () => {
    await displayAllPolls();
    displayCurrentPoll();
});

function displayCurrentPoll() {

    pollDisplay.textContent = '';

    const pollEl = renderPoll(question, optionA, optionB, votesA, votesB);
    pollEl.classList.add('current-poll');
    pollDisplay.append(pollEl);
}

async function displayAllPolls() {

    pollDisplay.textContent = '';
    pastPollsEl.textContent = '';

    const polls = await getPolls();

    for (let poll of polls) {
        const pastPolls = renderPoll(poll.question, poll.optionA, poll.optionB, poll.votesA, poll.votesB);

        pastPollsEl.append(pastPolls);
    }
}

displayCurrentPoll();
displayAllPolls();