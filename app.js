const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice 
let computerChoice
let finalResult

//if you click any of the buttons, something will happen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    //function to be executed when button clicked
    userChoice = e.target.getAttribute('id')
    yourChoiceDisplay.innerHTML = userChoice
    //run the function to randomly give computer choice
    generateComputerChoice()
    getResult()
}))

//function to randomly generate computer's choice
function generateComputerChoice() {
    //Math.random to generate random number between 0 and 0.9
    //Math.floor to return the largest whole number less than or equal 
    //to randomly generated number between 0-2; the +1
    //ensures it is always a 1, 2 or 3
    const randomNumber = Math.floor(Math.random() * 3) + 1 

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult () {
    if (computerChoice === userChoice) {
        finalResult = 'It\'s a draw'
    } else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
        finalResult = 'You Win'
    } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
        finalResult = 'You Win'
    } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
        finalResult = 'You Win'
    } else { 
        finalResult = 'Computer Wins'
    }
    resultDisplay.innerHTML = finalResult
}