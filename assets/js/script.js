// Selectors
let mainEl = document.getElementById('quiz')
let questionEl = document.getElementById('question')
let choicesEl = document.getElementById('choices')
let headerEl = document.getElementById('top')
let messageEl = document.getElementById('message')
let endGameEl = document.getElementById('endGame')
let quizIntroEl = document.getElementById('quizIntro')
let highScoresEl = document.getElementById('highScores')
//Creation elements
let listContainer = document.createElement('ol')
let list = document.createElement('li')
let countDown = document.createElement('div')
let hsButtonEl = document.createElement('button')
let formInitials = document.createElement('input')
let startButton = document.createElement('button')
let endMessage = document.createElement('p')
let initialsButton = document.createElement('button')
let resetButton = document.createElement('button')
let retryButton = document.createElement('button')
// Vars
let playerScore = 0
let playerName = 'Name:'
let secondsLeft = 121
let wLeft = 1
let turn = 0
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
        question: 'A common tool when using chrome developer tools is.',
        choices: ['python', 'jQuery', 'strings', 'console.log'],
        correct: 'console.log'
    }
]
// Display quiz questions and answers
function renderQuestion() {
    if (turn >= 5) {
        clearInterval(timerInterval)
        scoreBoard();
        return
    }
    for (let i = 0; i < questions[i].choices.length; i++) {

        questionEl.textContent = questions[turn].question
        let choice = document.createElement('li');
        choice.textContent = questions[turn].choices[i];
        choicesEl.appendChild(listContainer).appendChild(choice)
        // User input
        choice.addEventListener('click', function () {

            choicesEl.removeChild(listContainer).remove
            if (choice.textContent === questions[turn].correct) {
                turn++;
                listContainer.replaceChildren();
                renderQuestion();
                rightAnswer();

            } else {
                secondsLeft -= 10;
                turn++;
                listContainer.replaceChildren();
                renderQuestion();
                wrongAnswer();
            }
        })

    }
}
// Display Correct or Incorrect answer message
function wrongAnswer() {
    messageEl.textContent = 'Incorrect';
    document.body.appendChild(messageEl);
    let timerInterval = setInterval(function () {
        wLeft--;
        if (wLeft <= 0) {
            clearInterval(timerInterval);
            messageEl.replaceChildren();
        }

    }, 500);
}
function rightAnswer() {
    messageEl.textContent = 'Correct';
    document.body.appendChild(messageEl);
    let timerInterval = setInterval(function () {
        wLeft--;
        if (wLeft <= 0) {
            clearInterval(timerInterval);
            messageEl.replaceChildren();
        }

    }, 500);
}
//End Game Score Board
function scoreBoard() {
    quizIntroEl.style.display = 'none'
    mainEl.style.display = 'none'
    headerEl.style.display = 'none'
    highScoresEl.style.display = 'block'
    endGameEl.style.display = 'block'
    console.log(secondsLeft)
    // Enter Initials prompt
    endMessage.textContent = 'Enter your initials'
    initialsButton.textContent = 'Submit'
    retryButton.textContent = 'Retry Quiz'
    resetButton.textContent = 'Reset Scores'
    endGameEl.appendChild(endMessage)
    endGameEl.appendChild(formInitials)
    endGameEl.appendChild(initialsButton)
    endGameEl.appendChild(retryButton)
    endGameEl.appendChild(resetButton)
    // Event Listeners
    // Submit
    initialsButton.addEventListener('click', function () {

        localStorage.setItem(formInitials.value, secondsLeft)

        for (let key in localStorage) {

            console.log('Name:', key + ' ---- ' + 'Score:', localStorage[key])
            if (typeof localStorage[key] === 'string') {
                let pEl = document.createElement('li')
                pEl.innerHTML = 'Name:' + key + ' ' + 'Score:' + localStorage[key]
                highScoresEl.appendChild(pEl)
                formInitials.style.display = 'none'
                initialsButton.style.display = 'none'
                endMessage.style.display = 'none'
            }

        }
    })
    // Retry Quiz
    retryButton.addEventListener('click', function () {
        window.location.reload(true)

    })
    // Reset
    resetButton.addEventListener('click', function () {
        console.log('reset pressed')
        localStorage.clear()
        window.location.reload(true)
        init()
    })
}
// Countdown Timer
function setTime() {
    // Sets interval in variable
    let headerEl = document.getElementById('top');
    let countDown = document.createElement('div');
    timerInterval = setInterval(function () {
        secondsLeft--;
        countDown.textContent = secondsLeft;
        headerEl.appendChild(countDown);
        if (secondsLeft == 0) {
            // Kills Execution
            clearInterval(timerInterval);
            // Scoreboard
            scoreBoard();
        }
    }, 1000);
}
// Begin quiz
function quizStart() {
    headerEl.style.display = 'flex'
    mainEl.style.display = 'block'
    turn = 0
    headerEl.replaceChildren()
    choicesEl.replaceChildren()
    setTime()
    renderQuestion()
}
// Initialize
function init() {
    // Displays
    quizIntroEl.style.display = 'block'
    endGameEl.style.display = 'none'
    headerEl.style.display = 'none'
    mainEl.style.display = 'none'
    // Dynamics
    startButton.textContent = 'Start'
    quizIntroEl.appendChild(startButton)
    quizIntroEl.appendChild(hsButtonEl)
    hsButtonEl.textContent = "View High Scores"
    // Event Listeners
    // Quiz Start
    startButton.addEventListener('click', function () {
        highScoresEl.style.display = 'none'
        quizIntroEl.style.display = 'none'
        quizStart()

    })
    // View High Scores
    hsButtonEl.addEventListener('click', function(){

        localStorage.setItem(formInitials.value, secondsLeft)

        for (let key in localStorage) {

            console.log('Name:', key + ' ---- ' + 'Score:', localStorage[key])
            if (typeof localStorage[key] === 'string') {
                let pEl = document.createElement('li')
                pEl.innerHTML = 'Name:' + key + ' ' + 'Score:' + localStorage[key]
                highScoresEl.appendChild(pEl)
                hsButtonEl.style.display = 'none'
            }

        }   
        
    })
    
}
init()

