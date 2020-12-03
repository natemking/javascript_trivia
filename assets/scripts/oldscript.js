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
            // gameOver();
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


// Checks if users choice is right and goes to the next card
let userChoice = (right, w1, w2, w3, nextCard) => {
    
    answersEl.addEventListener('click', function (event){
        console.log(event.target)
        event.stopPropagation;
        // If the chosen answer is correct show Correct on screen and add 10 points 
        if(event.target.matches(right)){
            correctAnswer();
            setTimeout(nextCard, 700);
            console.log(score)
        // If the chosen answer is wrong show Wrong on screen remove 10 points & 10 seconds
        }else if(event.target.matches(w1 || w2 || w3)){
            wrongAnswer();
            setTimeout(nextCard, 700);
        } 
    })

}




// function test() {
//     answersEl.removeEventListener('click', userChoice)
//     console.log(event.target)
// }

let writeScore = () => {
    if (score === 0){
        scoreEl.textContent = `Score: 0${score}`;
    }else{

        scoreEl.textContent = `Score: ${score}`;
    }
}

//If correct answer
let correctAnswer = () => {
    hideAnswers(allAnswers);
    questionEl.textContent = 'Correct!';
    score += 10;
    writeScore();
}


//If wrong answer
let wrongAnswer = () => {
    hideAnswers(allAnswers);
    questionEl.textContent = 'Wrong!';
    score -= 10;
    countdown -= 10;
    writeScore();
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
    userChoice('#c', '#a', '#b', '#d', card2);
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
    userChoice('#d', '#a', '#b', '#c', card3);
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
    userChoice('#b', '#a', '#c', '#d', card4);
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
    userChoice('#a', '#b', '#c', '#d', card5);
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
    userChoice('#d', '#a', '#b', '#c', gameOver);
}

//Game over screen
let gameOver = () => {

    if (countdown === 0){
        questionEl.innerHTML = "Times Up! <br> GAME OVER"
    }else{
        questionEl.textContent = 'GAME OVER';
    }

    // questionEl.textContent = 'GAME OVER';
    hideScoreTime();
    removeAnswers(allAnswers);

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
var userScores = {
    'initials': userInits,
    'score': score
}

let showScores = () => {
    var storedScores = JSON.stringify(localStorage.getItem('user-scores'))
    if(storedScores) {
        userScores = storedScores;
    }
}

let storeScores = () => {
    localStorage.setItem('user-scores', JSON.stringify(userScores))
} 

// event listeners to start the game
answersEl.addEventListener('click', function (event) {
    if (event.target.matches('#a')){
    gameOver();
    // showScoreTime();
    // startTime();
    // card1();
    }
});
