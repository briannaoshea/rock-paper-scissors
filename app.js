const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice 

//if you click any of the buttons, something will happen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    //function to be executed when button clicked
    userChoice = e.target.id
    yourChoiceDisplay.innerHTML = userChoice
    //run the function to randomly give computer choice
    generateComputerChoice()
}))

//function to randomly generate computer's choice
function generateComputerChoice