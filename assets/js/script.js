// Selectors
let mainEl = document.getElementById('quiz')
let questionEl = document.getElementById('question')
let choicesEl = document.getElementById('choices')
let messageEl = document.getElementById('message')
let headerEl = document.getElementById('top')
let scoreEl = document.getElementById('scoreboard')


//Creation elements
let listContainer = document.createElement('ol')
let list = document.createElement('li')
let countDown = document.createElement('div')

// Vars
let playerScore = 0;
let secondsLeft
let wLeft
let turn

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
    {
        question: 'A very useful tool used during development and debugging for printing content to degbugger is:',
        choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        correct: 'console.log'
    },
]

// Countdown Timer
function setTime() {
    // Sets interval in variable
    let headerEl = document.getElementById('top')
    let countDown = document.createElement('div')
    let timerInterval = setInterval(function () {
        secondsLeft--
        countDown.textContent = secondsLeft
        headerEl.appendChild(countDown)


        // Times up condition
        if (secondsLeft < 0) {
            clearInterval(timerInterval)
            scoreBoard()

        }

    }, 1000)
}


// display
function showStuff(id, text, btn) {
    document.getElementById(main).style.display = 'block';
    // hide the lorem ipsum text
    
    document.getElementById(text).style.display = 'none';
    // hide the link
    btn.style.display = 'none';
}

// Scoreboard
function scoreBoard() {
    // Display Scoreboard
    scoreEl.replaceChildren()
    scoreEl.style.display = 'block';

    //User text input 
    let inputField = document.createElement('input')
    inputField.textContent = 'Hello'
    scoreEl.appendChild(inputField)

    // Submit button
    let button = document.createElement('button')
    button.textContent = 'Submit'
    scoreEl.appendChild(button)
    // Click event
    button.addEventListener('click', function () {

        let initials = inputField.value
        let scores = document.createElement('li')

        scores.textContent = initials + " " + secondsLeft
        scoreEl.appendChild(scores)
        console.log(initials, secondsLeft)
    })

    // Reset quiz button
    let resetButton = document.createElement('button')
    resetButton.textContent = 'Reset Quiz'
    scoreEl.appendChild(resetButton)
    // Click event
    resetButton.addEventListener('click', function () {
        playerScore = 0
        init()
        scoreEl.style.display = 'none';
        
        
        

    })




}

// initialize quiz
function init() {
    
    secondsLeft = 120;
    turn = 0;
    renderQuiz()

};

// Display quiz questions & choices
function renderQuiz() {

    if (turn >= 5) {
        console.log('Finished')
        scoreBoard()
        mainEl.style.display = 'none'
        return
       
    }
    mainEl.style.display = ''
    for (let i = 0; i < questions[turn].choices.length; i++) {

        questionEl.textContent = questions[turn].question

        let choice = document.createElement('li')
        choice.textContent = questions[turn].choices[i]
        choicesEl.appendChild(listContainer).appendChild(choice)

        // User Choice Input
        choice.addEventListener('click', function () {

            if (choice.textContent === questions[turn].correct) {
                turn++
                listContainer.replaceChildren()
                renderQuiz()
                rightAnswer()

            } else {
                secondsLeft -= 10
                turn++
                listContainer.replaceChildren()
                renderQuiz()
                wrongAnswer()
            }

        })

    }

}

// Display if answer is correct or incorrect

// Incorrect
function wrongAnswer() {
    wLeft = 1.5;
    messageEl.textContent = 'Incorrect'
    document.body.appendChild(messageEl)
    let timerInterval = setInterval(function () {
        wLeft--
        if (wLeft <= 0) {
            clearInterval(timerInterval)
            messageEl.replaceChildren()

        }

    }, 500)

}

// Correct
function rightAnswer() {

    messageEl.textContent = 'Correct'
    document.body.appendChild(messageEl)
    let timerInterval = setInterval(function () {
        wLeft--
        if (wLeft <= 0) {
            clearInterval(timerInterval)
            messageEl.replaceChildren()
        }

    }, 500)
}

init()

