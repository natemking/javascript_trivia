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

let currentQuestion = 0;

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


const allAnswers = [aEl, bEl, cEl, dEl];
//Storage Variable for score
let score = 0;
//Variable for countdown
let countdown = 60;



//Make score and timer visible


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
        }
    }, 1000);
}

//Show all answers visible
let showAnswers = (arr) => {
    arr.forEach((eL) => {
        eL.setAttribute('style', 'visibility: visible');
    });
}

const setQuestionElements = () => {
    if (currentQuestion === 0){
        // startTime();
        // showScoreTime();
        // // showAnswers(allAnswers);
        // setQuestionElements();
        rulesEl.textContent = ' ';
    }

    console.log(questions)
    console.log(currentQuestion)
    questionEl.textContent = questions[currentQuestion].question;
    aEl.textContent = questions[currentQuestion].choices[0];
    bEl.textContent = questions[currentQuestion].choices[1];
    cEl.textContent = questions[currentQuestion].choices[2];
    dEl.textContent = questions[currentQuestion].choices[3];
    currentQuestion++;
}

// event listeners to start the game
// answersEl.addEventListener('click', function (event) {
//     if (event.target.matches('#a')){
//         startTime();
//         showScoreTime();
//         showAnswers(allAnswers);
//         setQuestionElements();
//         rulesEl.textContent = ' ';

//         answersEl.removeEventListener('click', )
//     }
// });

const questionListBtns = document.querySelectorAll('.question-list .btn');
questionListBtns.forEach(function (btn){
    btn.addEventListener('click', function (event) {
        //on click of a,b, c. or d

        //call set questionelements
       
        setQuestionElements();
      });
})

