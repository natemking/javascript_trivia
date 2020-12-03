const timerEl = document.querySelector('#timer');
const scoreEl = document.querySelector('#score')
const scoreTimeEl = document.querySelector('#score-time')
const mainEl = document.querySelectorAll('main');
const rulesEl = document.querySelector('#rules');
const questionEl = document.querySelector('#question');
const answersEl = document.querySelector('#answers')
const aEl = document.querySelector('#a'); //Also the start button
const bEl = document.querySelector('#b');
const cEl = document.querySelector('#c');
const dEl = document.querySelector('#d');


const questions = [
    {
        question: 'What does "var" stand for?',
        choices: ['vary', 'variety', 'variable', 'none of the above'],
        answer: 'variable'
    },
    {
        question: 'Which of the following are loops?',
        choices: ['for statement', 'do/while', 'for/in', 'all of the above'],
        answer: 'all of the above',
    },
    {
        question: 'An Array is surrounded by?',
        choices: ['parentheses', 'brackets', 'curly brackets', 'quotes'] ,
        answer: 'brackets',
    },
    {
        question: '% is called a what?',
        choices: ['modulus', 'function', 'iterator', 'boolean'] ,
        answer: 'modulus',
    },
    {
        question: 'Objects can contain?',
        choices: ['strings', 'arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
];

// Timer function
let startTime = () => {
    let timer = setInterval(function(){
        countdown--;
        //Adds visual of timer to the dom. 
        if (countdown < 10){
            timerEl.textContent = `Timer: 0${countdown}`;
        }else{
            timerEl.textContent = `Timer: ${countdown}`;
        }
        //Stops timer at 0
        if (countdown === 0){
            clearInterval(timer);
            // gameOver();
        }
    }, 1000);
}