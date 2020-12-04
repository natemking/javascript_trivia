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
    {
        question: 'Which operator means or?',
        choices: ['&&', '===', '||', '+='],
        answer: '||',
    },
    {
        question: 'Array indexes start at what number?',
        choices: ['-1', '0', '1', '10'],
        answer: '0',
    },
    {
        question: 'Which math object allows you to round down?',
        choices: ['Math.pow()', 'Math.ceil()', 'Math.min()', 'Math.floor'],
        answer: 'Math.floor',
    },
    {
        question: 'True and False are examples of?',
        choices: ['strings', 'arrays', 'booleans', 'none of the above'],
        answer: 'booleans',
    },
    {
        question: 'What statement stops the execution of a Function?',
        choices: ['stop', 'over', 'leave', 'return'],
        answer: 'return',
    },
    {
        question: 'Key:value pairs are properties of a?',
        choices: ['object', 'array', 'string', 'none of the above'],
        answer: 'object',
    },
];

//Array for show/hide/remove answer
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
        if (countdown <= 0){
            clearInterval(timer);
        }
    }, 1000);
}

//Make score and timer visible
const showScoreTime = () =>{
    scoreTimeEl.setAttribute('style', 'visibility: visible');
}
//Make score and timer invisible 
const hideScoreTime = () =>{
    scoreTimeEl.setAttribute('style', 'visibility: hidden');
}

//Writes score to screen
const writeScore = () => {
    if (score === 0){
        scoreEl.textContent = `Score: 0${score}`;
    }else{
        scoreEl.textContent = `Score: ${score}`;
    }
}

//Show all answers visible
const showAnswers = (arr) => {
    arr.forEach((eL) => {
        eL.setAttribute('style', 'visibility: visible');
    });
}

//Hide all answers visible
const hideAnswers = (arr) => {
    arr.forEach((eL) => {
        eL.setAttribute('style', 'visibility: hidden');
    });
}

//Remove the answer elements
const removeAnswers = (arr) => {
    arr.forEach((eL) => {
        eL.setAttribute('style', 'display: none');
    });
}

//When a correct answer is chosen
const correctAnswer = () => {
    hideAnswers(allAnswers);
    questionEl.textContent = 'Correct!';
    score += 10;
    writeScore();
    i++
    nextMove();
}

//When a wrong answer is chosen
const wrongAnswer = () => {
    hideAnswers(allAnswers);
    questionEl.textContent = 'Wrong!';
    score -= 10;
    countdown -= 10;
    writeScore();
    i++
    nextMove();
}

//Controls what populates in the questions
let i = 0;
const quizz = () => {
    showAnswers(allAnswers);
    questionEl.textContent = questions[i].question;
    aEl.textContent = questions[i].choices[0];
    bEl.textContent = questions[i].choices[1];
    cEl.textContent = questions[i].choices[2];
    dEl.textContent = questions[i].choices[3];
}


//Triggers next round or end of game
const nextMove = () => {
    if (i < 10 && countdown > 0){
        setTimeout(quizz, 700);
    }else if (i == 10 || countdown <= 0){
        hideAnswers(allAnswers);
        gameOver()
    }
}

//Game over screen
let gameOver = () => {

    //Clear screen content and add game over message
    hideScoreTime();
    removeAnswers(allAnswers);
    if (countdown <= 0){
        questionEl.innerHTML = "Times Up! <br> GAME OVER"
    }else{
        questionEl.textContent = 'GAME OVER';
    }

    //creates new elements for game over page
    let finalScore = document.createElement("h1");
    let form = document.createElement('form'); 
    let div = document.createElement('div');
    let input = document.createElement('input');
    let submit = document.createElement('button');
    let playAgain = document.createElement('p');

    //adds text to those elements
    finalScore.textContent = `Your final score: ${score}`;
    submit.textContent = 'Submit your score';
    playAgain.textContent = 'Play Again';
    
    //appends those elements to the DOM
    document.querySelector('main').appendChild(finalScore);
    document.querySelector('main').appendChild(form);
    form.appendChild(div);
    div.appendChild(input);
    form.appendChild(submit);
    document.querySelector('main').appendChild(playAgain);

    //Sets the attributes of those elements
    finalScore.setAttribute('style', 'color: white; font-weight: 700;');
    finalScore.setAttribute('class', 'my-3');
    form.setAttribute ('id', 'game-over-form');
    div.setAttribute('class', 'form-group');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'user-initials');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'initials');
    input.setAttribute('placeholder', 'Enter Initials');
    input.setAttribute('style', 'width: 50%; margin: 0 auto;');
    submit.setAttribute('id', 'submit-init');
    submit.setAttribute('type', 'button');
    submit.setAttribute('class', 'btn btn-outline-warning btn-lg btn-block mx-auto');
    submit.setAttribute('style', 'min-width: 50%');
    playAgain.setAttribute('class', 'mt-3 hidden');
    playAgain.setAttribute('id', 'high-scores');


   //Query Select for new text input and submit button
    // let userInits = document.querySelector('#initials');
    let submitInit = document.querySelector('#submit-init');
    
    //Event listener that submits user initials and scores to local storage
    submitInit.addEventListener('click', function (event){
        event.preventDefault();
        let userInits = document.querySelector('#initials').value;

        //If the user submits without initials they are alerted to do so
        if(userInits === ""){
            alert('Please enter you initials')
            return;
        //If the user adds initials they are alerted that the score is recorded and layout changes      
        }else{
            alert("Score recorded!");
            form.setAttribute('class', 'hidden');
            finalScore.textContent = 'High Scores:';
            playAgain.setAttribute('style', 'color: rgb(255, 255, 255); visibility: visible');
            storeScores();
        };

        //local storage addtion of
        // let storedScore = [JSON.parse(localStorage.getItem('all-scores'))];
        // if(storedScore === null) {storedScore = [];};

        // let scoreStore = {
        //     "initials": userInits,
        //     "score": score
        // };
        // localStorage.setItem('user-scores', JSON.stringify(scoreStore));
        // storedScore.push(scoreStore);
        // localStorage.setItem('all-scores', JSON.stringify(storedScore));

        // document.querySelector('#initials').value = " ";
        
    });
}

//*** Event Listeners ***//
//Starts quizz
startEl.addEventListener('click', function (event) {
    if (event.target.matches('#start')){
    // gameOver();
    startEl.setAttribute('style', 'display: none')
    rulesEl.textContent = ' ';
    showScoreTime();
    startTime();
    quizz();
    }
});
//Listens for answers click
answersEl.addEventListener('click', function (event){
    if(event.target.textContent === questions[i].answer){
        correctAnswer();
    // If the chosen answer is wrong show Wrong on screen remove 10 points & 10 seconds
    }else if(event.target.textContent !== questions[i].answer){
        wrongAnswer();
    } 
})