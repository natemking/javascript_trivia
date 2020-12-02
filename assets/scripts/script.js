const startBtn = document.querySelector('#a');
const timerEl = document.querySelector('#timer');
const mainEl = document.querySelectorAll('main');
const rulesEl = document.querySelector('#rules');
const questionEl = document.querySelector('#question');
const answersEl = document.querySelector('answers')
const aEl = document.querySelector('#a');
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

let card1 = () => {
    // Ask 1st question
    questionEl.innerHTML = 'What does variable stand for?';
    // Clear out rules
    rulesEl.innerHTML = ' ';
    aEl.textContent = `A.      vary`;
    bEl.textContent = 'B. variety';
    cEl.textContent = 'C. variable';
    dEl.textContent = 'D. none of the above'
    
    bEl.setAttribute('style', 'visibility: visible');
    cEl.setAttribute('style', 'visibility: visible');
    dEl.setAttribute('style', 'visibility: visible');
    


}




// event listeners
startBtn.addEventListener('click', function () {
    startTime();
    card1();
});

