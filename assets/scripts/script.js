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
const startEl = document.querySelector('#start');

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

//Make score and timer visible
let showScoreTime = () =>{
    scoreTimeEl.setAttribute('style', 'visibility: visible');
}
//Make score and timer invisible 
let hideScoreTime = () =>{
    scoreTimeEl.setAttribute('style', 'visibility: hidden');
}

let writeScore = () => {
    if (score < 10){
        scoreEl.textContent = `Score: 0${score}`;
    }else{
        scoreEl.textContent = `Score: ${score}`;
    }
}

//Show all answers visible
let showAnswers = (arr) => {
    arr.forEach((eL) => {
        eL.setAttribute('style', 'visibility: visible');
    });
}

//Hide all answers visible
let hideAnswers = (arr) => {
    arr.forEach((eL) => {
        eL.setAttribute('style', 'visibility: hidden');
    });
}

//Remove the answer elements
let removeAnswers = (arr) => {
    arr.forEach((eL) => {
        eL.setAttribute('style', 'display: none');
    });
}

let correctAnswer = () => {
    hideAnswers(allAnswers);
    questionEl.textContent = 'Correct!';
    score += 10;
    writeScore();
    i++
    setTimeout(quizz(), 700);
}

let wrongAnswer = () => {
    score -= 10;
    // countdown -= 10;
    hideAnswers(allAnswers);
    questionEl.textContent = 'Wrong!';
    
    writeScore();
    i++
    setTimeout(quizz(), 700);
}

answersEl.addEventListener('click', function (event){
    console.log(event.target)
    if(event.target.textContent === questions[i].answer){
        console.log("yay")
        correctAnswer();
    // If the chosen answer is wrong show Wrong on screen remove 10 points & 10 seconds
    }else if(event.target.textContent !== questions[i].answer){
        console.log('nay')
        wrongAnswer();
    } 
})

let i = 0;
const quizz = () => {
    showAnswers(allAnswers);
    questionEl.textContent = questions[i].question;
    aEl.textContent = questions[i].choices[0];
    bEl.textContent = questions[i].choices[1];
    cEl.textContent = questions[i].choices[2];
    dEl.textContent = questions[i].choices[3];
}



answersEl.addEventListener('click', function (event) {
    if (event.target.matches('#start')){
    startEl.setAttribute('style', 'display: none');
    rulesEl.textContent = ' ';
    showScoreTime();
    startTime();
    quizz();
    }
});