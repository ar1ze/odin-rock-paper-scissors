// Game states
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 1;

// DOM elements
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const resetScoreBtn = document.querySelector('#reset-btn');

let playerChoiceDisplay = document.querySelector('#player-choice');
let computerChoiceDisplay = document.querySelector('#computer-choice');

let winnerDisplay = document.querySelector('.winner');

let playerScoreDisplay = document.querySelector('#player-score');
let computerScoreDisplay = document.querySelector('#computer-score');

// Generate random computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(3 * Math.random());
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// Add emoji to choice for display
function insertEmoji(choice) {
  switch (choice) {
    case 'rock':
      return 'rock 🗿';
    case 'paper':
      return 'paper 📄';
    case 'scissors':
      return 'scissors ✂️';
    default:
      return choice;
  }
}

// Update choice display for both players
function updateChoices(playerChoice, computerChoice) {
  playerChoiceDisplay.textContent = insertEmoji(playerChoice);
  computerChoiceDisplay.textContent = insertEmoji(computerChoice);
}

// Reset choice display to default 
function defaultChoicesDisplay() {
  playerChoiceDisplay.textContent = 'Make your choice!';
  computerChoiceDisplay.textContent = 'Waiting ...';
}

// Determine winner: 
// true = player wins, f
// alse = computer wins, 
// undefined = draw
function getWinner(playerChoice, computerChoice) {
  let totalLength = playerChoice.length + computerChoice.length;
  switch (totalLength) {
    case 9:
      return playerChoice === 'paper';
    case 12:
      return playerChoice === 'rock';
    case 13:
      return playerChoice === 'scissors';
    default:
      return undefined;
  }
}

// Display winner with colored message
function displayWinner(winner) {
  let message;
  let bgColor;

  switch (winner) {
    case true:
      message = 'You win!';
      bgColor = '#43c25a';
      break;
    case false:
      message = 'Computer wins!';
      bgColor = '#f85454';
      break;
    case undefined:
      message = `It's a tie!`;
      bgColor = '#f9b50f';
  }

  updateWinner(message, bgColor);
}

// UPdate or create winner display element
function updateWinner(message, bgColor) {
  let existingParagraph = winnerDisplay.querySelector('p');

  if (existingParagraph) {
    setWinnerParagraphStyle(existingParagraph, message, bgColor);
  } else {
    let newParagraph = document.createElement('p');
    setWinnerParagraphStyle(newParagraph, message, bgColor);
    winnerDisplay.appendChild(newParagraph);
  }
}

// Style winner pearagrapth with message and background
function setWinnerParagraphStyle(paragraph, message, bgColor) {
  paragraph.textContent = message;
  paragraph.style.cssText = `background: ${bgColor};`;
}

// Remove winner display paragraph
function removeWinnerParagraph() {
  let existingParagraph = winnerDisplay.querySelector('p');
  winnerDisplay.removeChild(existingParagraph);
}

// Update global scores based on winner
function updateScores(winner){
  if (winner) {
    playerScore++;
  } else if (winner === false) {
    computerScore++;
  }
  updateDisplayScores();
}

// Update score display in DOM
function updateDisplayScores() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

// Reset all game state
function resetScores() {
  playerScore = 0;
  computerScore = 0;
  defaultChoicesDisplay();
  removeWinnerParagraph();
  updateDisplayScores();
}

// Play one round of the game
function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  updateChoices(humanChoice, computerChoice);

  let winner = getWinner(humanChoice, computerChoice);

  displayWinner(winner);
  updateScores(winner);
}

// Event listeners
rockBtn.addEventListener('click', () => {
  playRound('rock');
});

paperBtn.addEventListener('click', () => {
  playRound('paper');
});

scissorsBtn.addEventListener('click', () => {
  playRound('scissors');
});

resetScoreBtn.addEventListener('click', () => {
  resetScores();
});