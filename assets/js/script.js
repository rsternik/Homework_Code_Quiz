// Selectors

let mainEl = document.getElementById('quiz');
let questionEl = document.getElementById('question');
let choicesEl = document.getElementById('choices');


//Creation elements
let listContainer = document.createElement('ol');
let list = document.createElement('li');
let countDown = document.createElement('div');
let headerEl = document.getElementById('top');

// Vars
let playerScore = 0;
let secondsLeft = 10;

// Arrays
let questions = [
    {
        question: 'Commonly usd data types DO NOT include:',
        choices: ['strings', 'boolean', 'alerts', 'numbers'],
        correct: 'true'
    },
    {
        question: 'The condition in an if / else statement is enclosed within ____',
        choices: ['quotes', 'curly brackets', 'paratheses', 'square brackets'],
        correct: 'true'
    },
    {
        question: 'Arrays in JavaScript can be uses to store ____',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        correct: 'true'
    },
    {
        question: 'String values must be enclosed within ____ when being assinged to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'paratheses'],
        correct: 'true'
    },
];


// Countdown Timer

function setTime() {
    // Sets interval in variable
    let headerEl = document.getElementById('top');
    let countDown = document.createElement('div');
    let timerInterval = setInterval(function () {
        secondsLeft--;
        countDown.textContent = secondsLeft;
        headerEl.appendChild(countDown);
        console.log(secondsLeft);


        if (secondsLeft === 0) {
            // Kills Execution
            clearInterval(timerInterval);
            // Lose Screen
            gameOver();
        }

    }, 1000);
}

// Game Over
function gameOver() {
}


function renderQuestion() {


        
        
  
    
        let stuff = 0;
        for (let i = 0; i < questions.length; i++) {
        questionEl.textContent = questions[stuff].question
        let choice = document.createElement('button');
        choice.innerHTML = questions[stuff].choices[i];
        choicesEl.appendChild(listContainer).appendChild(choice);
        
        // Records user choice
        choice.addEventListener('click', function () {
            
            console.log(choice.textContent)
           
        });


    }


}


setTime();
renderQuestion();