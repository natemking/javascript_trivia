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
const formEl = document.querySelector('#game-over-form');


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

//Remove the answer elements
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
    userChoice('#d', '#a, #b, #c', card3);
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
    userChoice('#b', '#a, #c, #d', card4);
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
    userChoice('#a', '#b, #c, #d', card5);
}

//Question card 5
let card5 = () => {
    // Ask 1st question
    questionEl.innerHTML = 'Objects can contain?';
    aEl.textContent = 'A. Strings';
    bEl.textContent = 'B. Arrays';
    cEl.textContent = 'C. Booleans';
    dEl.textContent = 'D. all of the above';
    showAnswers(allAnswers);
    //Correct answer is A
    userChoice('#d', '#a, #b, #c', gameOver);
}

//Game over screen
let gameOver = () => {
    questionEl.textContent = 'GAME OVER';
    hideScoreTime();
    removeAnswers(allAnswers);

    //creates new elements for game over page
    let finalScore = document.createElement("h1");
    let form = document.createElement('form'); 
    let div = document.createElement('div');
    let input = document.createElement('input');
    let submit = document.createElement('button');
    let viewHighScores = document.createElement('p');

    //adds text to those elements
    finalScore.textContent = `Your final score: ${score}`;
    submit.textContent = 'Submit your score';
    viewHighScores.textContent = 'View High Scores';
    
    //appends those elements to the DOM
    document.querySelector('main').appendChild(finalScore);
    document.querySelector('main').appendChild(form);
    form.appendChild(div);
    div.appendChild(input);
    form.appendChild(submit);
    document.querySelector('main').appendChild(viewHighScores);

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
    viewHighScores.setAttribute('class', 'mt-3');
    viewHighScores.setAttribute('id', 'high-scores');
    viewHighScores.setAttribute('style', 'color: rgb(255, 255, 255)');

   //Query Select for new text input and submit button
    // let userInits = document.querySelector('#initials');
    let submitInit = document.querySelector('#submit-init');
    
    //Event listener that submits user initials and scores to local storage
    submitInit.addEventListener('click', function (event){
        event.preventDefault();
        //Object to store data
        // var scoreStore = { 
        //     initials: [],
        //     score: []
        // };

        let storedScore = [JSON.parse(localStorage.getItem('user-scores'))];
        
        if(storedScore == null) storedScore = [];

        let userInits = document.querySelector('#initials').value;
        let scoreStore = {
            "initials": userInits,
            "score": score
        };
        localStorage.setItem('user-scores', JSON.stringify(scoreStore));
        storedScore.push(scoreStore);
        localStorage.setItem('all-scores', JSON.stringify(storedScore));

        document.querySelector('#initials').value = " ";
        alert("Score recorded!");
        // console.log(localStorage)
        

        //Convert object to string
        // scoreStore.initials.push(userInits.value.trim());
        // scoreStore.score.push(score);
        
        //Push to local storage
        // console.log(scoreStore)
        // localStorage.setItem('user-scores', JSON.stringify(scoreStore));
    })
    
}

// initials: userInits.value.trim(),
//             score: score
    

//After clicking view high scores
// let hideGameOver = () => {
    
//     const highScoresEl = document.querySelector('p');
//     highScoresEl.addEventListener('click', hideGameOver);
//     questionEl.setAttribute('style', 'display: none')
//     formEl.setAttribute('style', 'display: none')


// }


// event listeners to start the game
answersEl.addEventListener('click', function (event) {
    if (event.target.matches('#a')){
    // gameOver();
    showScoreTime();
    startTime();
    card1();
    
    }
});
