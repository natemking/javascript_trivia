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
let score = 0;
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

//Checks if users choice is right and goes to the next card
let userChoice = (right, wrong, nextCard) => {
    answersEl.addEventListener('click', function (event){
        event.preventDefault();
        if(event.target.matches(right)){
            correctAnswer();
            setTimeout(nextCard, 700);
            score += 10;
            scoreEl.textContent = `Score: ${score}`;
        }else if(event.target.matches(wrong)){
            wrongAnswer();
            setTimeout(nextCard, 700);
            // score -= 10;
            return countdown -= 10;
        } 
    })
}

//If correct answer
let correctAnswer = () => {
    hideAnswers(allAnswers);
    questionEl.textContent = 'Correct!';
}

//If wrong answer
let wrongAnswer = () => {
    hideAnswers(allAnswers);
    questionEl.textContent = 'Wrong!';
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
    
    if (dEl.addEventListener('click', function(){
        correctAnswer();
        setTimeout(() => { card1() }, 700);
    })) {} else if (aEl.addEventListener('click', function(){
        wrongAnswer();
        setTimeout(() => { card1() }, 700);
    })) {} else if (bEl.addEventListener('click', function(){
        wrongAnswer();
        setTimeout(() => { card1() }, 700);
    })) {} else if (cEl.addEventListener('click', function(){
        wrongAnswer();
        setTimeout(() => { card1() }, 700);
    })) {} 
}



// event listeners to start the game
answersEl.addEventListener('click', function (event) {
    if (event.target.matches('#a')){
    showScoreTime();
    startTime();
    card1();
    }
});
