// Selectors

let mainEl = document.getElementById('quiz');
let questionEl = document.getElementById('question');
let choicesEl = document.getElementById('choices');
let headerEl = document.getElementById('top');

//Creation elements
let listContainer = document.createElement('ol');
let list = document.createElement('li');
let countDown = document.createElement('div');


// Vars
let playerScore = 0;
let secondsLeft = 180;

// Arrays
let questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'boolean', 'alerts', 'numbers'],
        correct: 'alerts'
    },
    {
        question: 'The condition in an if / else statement is enclosed within ____',
        choices: ['quotes', 'curly brackets', 'paratheses', 'square brackets'],
        correct: 'curly brackets'
    },
    {
        question: 'Arrays in JavaScript can be used to store ____',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        correct: 'all of the above'
    },
    {
        question: 'String values must be enclosed within ____ when being assinged to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'paratheses'],
        correct: 'quotes'
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

let p = 0;

function renderQuestion() {

    for (let i = 0; i < questions.length; i++) {
        
        questionEl.textContent = questions[p].question
        
        let choice = document.createElement('li');
        choice.textContent = questions[p].choices[i];
        choicesEl.appendChild(listContainer).appendChild(choice)
        // choicesEl.appendChild(listContainer).appendChild(choice)
                
        // Records user choice
        choice.addEventListener('click', function () {
            
            choicesEl.removeChild(listContainer).remove
            if (choice.textContent === questions[p].correct){
                p++;
                listContainer.replaceChildren();
                renderQuestion();
                
            } 
        }) 

        


    }


}


setTime();
renderQuestion();