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

//Array for forEach loop that changes elements visibility
const allAnswers = [aEl, bEl, cEl, dEl];
//Storage Variable for score
var score = 0;
//Variable for countdown
let countdown = '60'.padStart(2, '0');


// Timer function
let startTime = () => {
    let timer = setInterval(function(){
        countdown--;
        timerEl.textContent = `Timer: ${countdown}`;

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

let removeAnswers = (arr) => {
    arr.forEach((eL) => {
        eL.setAttribute('style', 'display: none');
    });
}

//Checks if users choice is right and goes to the next card
let userChoice = (right, wrong, nextCard) => {
    answersEl.addEventListener('click', function (event){
        event.stopPropagation;
        // If the chosen answer is correct show Correct on screen and add 10 points 
        if(event.target.matches(right)){
            correctAnswer();
            setTimeout(nextCard, 700);
            console.log(score)
        // If the chosen answer is wrong show Wrong on screen remove 10 points & 10 seconds
        }else if(event.target.matches(wrong)){
            wrongAnswer();
            setTimeout(nextCard, 700);
        } 
    })
}

//If correct answer
let correctAnswer = () => {
    hideAnswers(allAnswers);
    questionEl.textContent = 'Correct!';
    score +=10;
    scoreEl.textContent = `Score: ${score}`;  
}

//If wrong answer
let wrongAnswer = () => {
    hideAnswers(allAnswers);
    questionEl.textContent = 'Wrong!';
    // score -= 10;
    // scoreEl.textContent = `Score: ${score}`;
    // countdown -= 10;
}

//Question card 1
let card1 = () => {
    // Ask 1st question
    questionEl.textContent = 'What does variable stand for?';
    // Clear out rules
    rulesEl.textContent = ' ';
    //Change answer choices
    aEl.textContent = 'A. vary';
    bEl.textContent = 'B. variety';
    cEl.textContent = 'C. variable';
    dEl.textContent = 'D. none of the above'
    showAnswers(allAnswers);
    //Correct answer is C
    userChoice('#c', '#a, #b, #d', card2);
}

//Question card 2
let card2 = () => {
    // Ask 1st question
    questionEl.textContent = 'Which of the following are loops?';
    aEl.textContent = 'A. for statement';
    bEl.textContent = 'B. do...while';
    cEl.textContent = 'C. for...in';
    dEl.textContent = 'D. all of the above'
    showAnswers(allAnswers);
    //Correct answer is D
    userChoice('#d', '#a, #b, #c', card3)
}

//Question card 3
let card3 = () => {
    // Ask 1st question
    questionEl.textContent = 'An Array is surrounded by?';
    aEl.textContent = 'A. Parenthesis';
    bEl.textContent = 'B. Brackets';
    cEl.textContent = 'C. Curly Brackets';
    dEl.textContent = 'D. Quotes';
    showAnswers(allAnswers);
    //Correct answer is B
    userChoice('#b', '#a, #c, #d', card4)
}

//Question card 4
let card4 = () => {
    // Ask 1st question
    questionEl.innerHTML = '<code>.hasOwnProperty()</code> does what?';
    aEl.textContent = 'A. Checks if the object has that property';
    bEl.textContent = 'B. Adds a property to an Object';
    cEl.textContent = 'C. Compares two properties';
    dEl.textContent = 'D. none of the above';
    showAnswers(allAnswers);
    //Correct answer is A
    userChoice('#a', '#b, #c, #d', card5)
}

let card5 = () => {
    // Ask 1st question
    questionEl.innerHTML = 'Objects can contain?';
    aEl.textContent = 'A. Strings';
    bEl.textContent = 'B. Arrays';
    cEl.textContent = 'C. Booleans';
    dEl.textContent = 'D. all of the above';
    showAnswers(allAnswers);
    //Correct answer is A
    userChoice('#d', '#a, #b, #c', gameOver)
}

let gameOver = () => {
    questionEl.innerHTML = 'GAME OVER';
    hideScoreTime();
    removeAnswers(allAnswers);
}

// event listeners to start the game
answersEl.addEventListener('click', function (event) {
    if (event.target.matches('#a')){
    showScoreTime();
    startTime();
    card1();
    }
});
