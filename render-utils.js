export function renderPoll(question, optionA, optionB, votesA, votesB) {
    const pollDiv = document.createElement('div');
    
    const questionDiv = document.createElement('span');
    const questionEl = document.createElement('h3');
    
    const optionsDiv = document.createElement('span');
    const optionAEl = document.createElement('p');
    const optionBEl = document.createElement('p');

    questionEl.textContent = question;
    optionAEl.textContent = `${optionA}: ${votesA}`;
    optionBEl.textContent = `${optionB}: ${votesB}`;

    pollDiv.classList.add('posted-polls');
    questionDiv.classList.add('question-display');
    optionsDiv.classList.add('poll-options');
    
    questionDiv.append(questionEl);
    optionsDiv.append(optionAEl, optionBEl);
    pollDiv.append(questionDiv, optionsDiv);

    return pollDiv;
}