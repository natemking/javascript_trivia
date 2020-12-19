# Javascript Trivia
## Homework Assignment #4 - 04 Web APIs: Code Quiz
http://www.natemking.dev/javascript_trivia/

![html badge](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![css badge](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
![bootstrap badge](https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white)
![js badge](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E")

---

## Table of Contents
 * [Description](#description)
    + [Scope of Work](#scope-of-work)
    + [HTML and CSS](#html-and-css)
    + [Javascript functionality](#javascript-functionality)
  * [Screenshots](#screenshots)
  * [Credits](#credits)

## Description
---
### Scope of Work
The task at hand is to design a code quiz that not only utilizes the dynamic abilities of JavaScript but also stores the results of the users score in their local storage. The user is presented with a "start quiz" screen. Once they click in they have the chance to answer ten questions relating to JavaScript in sixty seconds. If they answer the question correctly, they acquire ten points and move onto the next question. If they answer wrong, they are docked, not only, ten points but ten seconds from the timer. Upon completion of all ten questions or running out of time, the game ends. Next, is the game over screen which asks the user to submit their initials. Once submitted they are led to a scoreboard which shows the last five scores that they had. Finally, there is a link to play again.  

### HTML and CSS
For simplicity and efficiency, BootStrap was chosen for the design elements. This allowed me to quickly throw together a basic site with a navbar and jumbotron container. The navbar contains an icon, heading, score and timer. Within the jumbotron, there is the question and multiple choice answers setup using buttons. When the game ends the jumbotron show your score and has an input field for initials, The last screen consists of a table that holds the last 5 scores the user has submitted. 

The quiz was also designed to be fully responsive and work on mobile. Even though Bootstrap comes with great built-in responsiveness, I still had to add a few media queries to achieve the look I was going for. 

### JavaScript Functionality
JavaScript is the meat and potatoes of this project. I initially set up many query selectors so that the majority of the page is open to being as dynamic as it can be. I chose to house all of my questions, answer options, and correct answers in an array of objects. I am able to go through the array by using a counter variable I called `i`. 

The start page is set up in the HTML. The start button has a click event listener on it. When it is clicked the timer and score are made visible in the navbar. Then the title is changed to the questions and the buttons that hold the possible choices appear. Those `<ul>` that houses the buttons has a click event listener on it. When an answer is clicked on, the function within that event listener checks to see if the text content is equal to the correct answer in the questions array. If it is a `correctAnswer()` function is called. If not a `wrongAnswer()` function is called. In `correctAnswer()` the `<ul>` buttons are hidden and the screen shows "Correct!". Ten points are written and added to the score. The `i` counter variable is increased by one and the next set of questions and answers is called in the `quiz()`. The `wrongAnswer()` function operates almost the same but the screen flashes "Wrong!", ten points are subtracted from the score, and ten seconds are removed from the timer. When `quizz()` is called, the `i` counter variable is set up for the indexing of the array. 

When all questions are answered or the timer hits zero the `gameOver()` function is called. All of the answer buttons are removed. If you finished without running out of time, "Game Over" is displayed. If you run out of time, "Times Up- Game Over" is displayed. Your score is also added to the screen dynamically. Lastly, there is a text input and submit button. The majority of what is on the screen here is added dynamically. With the exception of the game over messages element, the rest do not exist in the HTM. They are all created and added to the DOM when `gameOver()` is called. The input button asks for the users initials. If they click submit without initials an alert appears asking to put initials in. 

After submitting their score, an alert informs the user and the `scores()` function is called. The initials and score are sent to local storage. The screen yet again dynamically changed and a scores table is shown. This time though, the table is in the HTML but is set to `display: none;`. Its attribute is changed at the call of the function. The initials and score are then sent to the table by using two for loops that each call a different array. One is for the initials and the other for the scores. Within those for loops, the text content is edited to its corresponding table cells. The table has 5 rows for input but I added to the local storage null check if statement, an if-else statement that if the score array gets larger than five entries, the first entry is removed vis `shift()`. This makes the scoreboard dynamic as well. Lastly, there is a play again feature that utilizes a click event listener to refresh the page on click giving the user a quick way to get to taking the quiz again.

---

## Screenshots
###### click to expand
<details>
<summary><strong>Large screens:</strong></summary>
<br>

![desktop start screen](./assets/images/screenshots/desktop-start-screen.jpg?raw=true)
<br>
_desktop start screen_
<br>

![desktop question screen](./assets/images/screenshots/desktop-question-screen.jpg?raw=true)
<br>
_desktop question screen_
<br>

![desktop gameover screen](./assets/images/screenshots/desktop-gameover-screen.jpg?raw=true)
<br>
_desktop gameover screen_
<br>

![desktop score screen](./assets/images/screenshots/desktop-score-screen.jpg?raw=true)
<br>
_desktop score screen_
<br>
</details>

<details>
<summary><strong>Mobile screens:</strong></summary>
<br>

![mobile start screen](./assets/images/screenshots/mobile-start-screen.jpg?raw=true)
<br>
_mobile start screen_
<br>

![mobile question screen](./assets/images/screenshots/mobile-question-screen.jpg?raw=true)
<br>
_mobile question screen_
<br>

![mobile gameover screen](./assets/images/screenshots/mobile-gameover-screen.jpg?raw=true)
<br>
_mobile gameover screen_
<br>

![mobile score screen](./assets/images/screenshots/mobile-score-screen.jpg?raw=true)
<br>
_mobile score screen_
<br>
</details>

---

## Credits

* [JS Logo](https://www.vhv.rs/somore/javascript-logo)

* [Better responsive typography](https://css-tricks.com/fun-viewport-units/)

* [Security differences between innerHTML and textContent](https://stackoverflow.com/questions/48517469/security-innerhtml-vs-textcontent-with-api)

* [Getting multiple values to local storage](https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage)

* [Cleaner set timeout code than ive used in the past](https://www.sitepoint.com/javascript-settimeout-function-examples/)

* [Using foreach](https://dmitripavlutin.com/foreach-iterate-array-javascript/)

* [Page refresh on click](https://www.w3schools.com/jsref/met_loc_reload.asp)