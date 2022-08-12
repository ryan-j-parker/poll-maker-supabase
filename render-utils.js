export function renderPoll(poll) {
    const pollBoxEl = document.createElement('div');
    const questionEl = document.createElement('h3');
    const optionAEl = document.createElement('p');
    const optionBEl = document.createElement('p');

    questionEl.textContent = poll.question;
    optionAEl.textContent = `${poll.optionA}: ${poll.votesA}`;
    optionBEl.textContent = `${poll.optionB}: ${poll.votesB}`;

    pollBoxEl.classList.add('posted-poll');
    pollBoxEl.append(questionEl, optionAEl, optionBEl);
    
    return pollBoxEl;
}

export function renderOption(question, option, vote) {
    const pollDiv = document.createElement('div');
    const questionDiv = document.createElement('h3');
    const optionDiv = document.createElement('p');
    const voteDiv = document.createElement('p');

    pollDiv.classList.add('poll-wrapper');

    questionDiv.textContent = question;
    optionDiv.textContent = option;
    voteDiv.textContent = vote;

    pollDiv.append(questionDiv, optionDiv, voteDiv);
}