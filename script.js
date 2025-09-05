// Welcome message
let welcomeMsg = 'Hello there!\nWelcome to the rock paper scissors game.';
alert(welcomeMsg);

// Global scores
let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 2;

// Get choices
function getComputerChoice() {
  let randomNumber = Math.floor(3 * Math.random());
  if (randomNumber == 0) {
    return 'rock';
  } else if (randomNumber == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  let humanInput = prompt("Choose between 'rock', 'paper' or 'scissors'");
  return humanInput.toLowerCase();
}

function getWinnerChoice(humanChoice, computerChoice) {
  let totalLength = humanChoice.length + computerChoice.length;
  switch (totalLength) {
    case 9:
      return 'paper';
    case 12:
      return 'rock';
    case 13:
      return 'scissors';
    default:
      return 'invalid choice';
  }
}

// Helper functions
function capitalizeFirstLetter(word) {
  let firstLetter = word.charAt(0);
  let capitalized = firstLetter.toUpperCase();
  return word.replace(firstLetter, capitalized);
}

function printChoices(humanChoice, computerChoice) {
  let humanChoiceText = `Human choice: ${humanChoice}`;
  let computerChoiceText = `Computer choice: ${computerChoice}`;
  return `${humanChoiceText}\n${computerChoiceText}`;
}

function printScoreBoard() {
  let humanScoreText = `Human score: ${humanScore}`;
  let computerScoreText = `Computer score: ${computerScore}`;
  return `Scoreboard:\n${humanScoreText}\n${computerScoreText}`;
}

function printWinner() {
  let winnerMsg = '';
  
  if (humanScore > computerScore) {
    winnerMsg = 'Congratulations! You beat the computer in rock paper scissors!';
  } else if (humanScore < computerScore) {
    winnerMsg = 'Unfortunately you lost the game.';
  } else {
    winnerMsg = 'Close one! The game ended in a draw!';
  }
  
  let finalScores = printScoreBoard();
  let finalMsg = `Game Over!\n\n${finalScores}\n\n${winnerMsg}`;
  alert(finalMsg);
}

function playRound(humanChoice, computerChoice) {
  let roundMsg = `Round ${n}\n\n`;
  let choicesMsg = printChoices(humanChoice, computerChoice);
  let resultMsg = '';
  
  // If human and computer same choice then draw
  if (humanChoice === computerChoice) {
    resultMsg = 'Draw - no points given';
  } else {
    let winnerChoice = getWinnerChoice(humanChoice, computerChoice);
    let humanChoiceText = capitalizeFirstLetter(humanChoice);
    let computerChoiceText = capitalizeFirstLetter(computerChoice);
    
    if (humanChoice === winnerChoice) {
      resultMsg = `You win! ${humanChoiceText} beats ${computerChoiceText}`;
      humanScore++;
    } else if (computerChoice == winnerChoice) {
      resultMsg = `You lose! ${computerChoiceText} beats ${humanChoiceText}`;
      computerScore++;
    } else {
      resultMsg = 'Could not decide winner';
    }
  }
  
  let scoreMsg = printScoreBoard();
  let fullRoundMsg = `${roundMsg}${choicesMsg}\n\n${resultMsg}\n\n${scoreMsg}`;
  
  alert(fullRoundMsg);
}

let n = 1;
while (n <= numberOfRounds) {

  // Get human and computer choices
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  
  // Play one round
  playRound(humanChoice, computerChoice);
  
  // Print the winner after the last round
  if (n === numberOfRounds) {
    printWinner();
  }
  
  // Increment round
  n++;
}