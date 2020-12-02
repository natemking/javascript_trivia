const timerEl = document.querySelector('#timer');
const mainEl = document.querySelectorAll('main');
const rulesEl = document.querySelector('#rules');
const questionEl = document.querySelector('#question');
const answersEl = document.querySelector('answers')
const aEl = document.querySelector('#a'); //Also the start button
const bEl = document.querySelector('#b');
const cEl = document.querySelector('#c');
const dEl = document.querySelector('#d');




// Timer function
let startTime = () => {
    let countdown = '60'.padStart(2, '0');

    let timer = setInterval(function(){
        countdown--;
        timerEl.textContent = `Timer: ${countdown}`;

        if (countdown === 0){
            clearInterval(timer);
        }
    }, 1000);
}

// Show all answers
let showAnswers = () => {
    aEl.setAttribute('style', 'visibility: visible');
    bEl.setAttribute('style', 'visibility: visible');
    cEl.setAttribute('style', 'visibility: visible');
    dEl.setAttribute('style', 'visibility: visible');
}
// Hide all answers
let hideAnswers = () => {
    aEl.setAttribute('style', 'visibility: hidden');
    bEl.setAttribute('style', 'visibility: hidden');
    cEl.setAttribute('style', 'visibility: hidden');
    dEl.setAttribute('style', 'visibility: hidden');
}

let correctAnswer = () => {
    hideAnswers();
    questionEl.textContent = 'Correct!';
}

let wrongAnswer = () => {
    hideAnswers();
    questionEl.textContent = 'Wrong!';
}

let card1 = () => {
    // Ask 1st question
    questionEl.textContent = 'What does variable stand for?';
    // Clear out rules
    rulesEl.textContent = ' ';
    aEl.textContent = 'A. vary';
    bEl.textContent = 'B. variety';
    cEl.textContent = 'C. variable';
    dEl.textContent = 'D. none of the above'
    showAnswers();

  
    cEl.addEventListener('click', function (){
        correctAnswer();
        setTimeout(() => { card2() }, 600);
    });
    
}

let card2 = () => {
    // Ask 1st question
    questionEl.textContent = 'Which of the following are loops?';
    aEl.textContent = 'A. for statement';
    bEl.textContent = 'B. do...while';
    cEl.textContent = 'C. for...in';
    dEl.textContent = 'D. all of the above'
    showAnswers();

  
    dEl.addEventListener('click', function (){
        correctAnswer()});
    
}



// event listeners
aEl.addEventListener('click', function () {
    startTime();
    card1();
});

