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
    userChoice = e.target.id
    yourChoiceDisplay.innerHTML = userChoice
    //run the function to randomly give computer choice
    generateComputerChoice()
}))

//function to randomly generate computer's choice
function generateComputerChoice() {
    //Math.random to generate random number between 0 and 0.9
    //Math.floor to return the largest whole number less than or equal 
    //to randomly generated number between 0-2; the +1
    //ensures it is always a 1, 2 or 3
    const randomNumber = Math.floor(Math.random() * 3) + 1 

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}
}