/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const gameUI = document.querySelector('#game'),
  minNumUI = document.querySelector('.min-num'),
  maxNumUI = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  messageUI = document.querySelector('.message');

// Assign UI min and max
minNumUI.textContent = min;
maxNumUI.textContent = max;

// Event listener guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number netween ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct, you win!`, 'green');

  } else {

  }
})

function setMessage(message, color) {
  messageUI.style.color = color;
  messageUI.textContent = message;
}