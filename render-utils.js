export function renderPoll(poll) {
    const pollBoxEl = document.createElement('div');
    const optionAEl = document.createElement(poll.optionA, poll.votesA);
    const optionBEl = document.createElement(poll.optionB, poll.votesB);

    pollBoxEl.classList.add('posted-poll');
    pollBoxEl.append(optionAEl, optionBEl);
    
    return pollBoxEl;
}