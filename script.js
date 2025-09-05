// Welcome message
console.log('Hello there!');
console.log('Welcome to the rock paper scissors game');

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
  let humanInput = prompt("Choose between 'rock', 'paper' or 'scissor'");
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
  console.log(`Human choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
}

function printScoreBoard() {
  console.log(`Scoreboard`);
  console.log(`Human score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

function printWinner() {
  if (humanScore > computerScore) {
    console.log(
      'Congratulations! You beat the computer to the rock paper scissors game'
    );
  } else if (humanScore < computerScore) {
    console.log('Unfortunetly you lost the game.');
  } else {
    console.log('Close one! The game ended in a draw!');
  }
}
function playRound(humanChoice, computerChoice) {
  // Print the choices
  printChoices(humanChoice, computerChoice);

  // If human and computer same choice then draw
  if (humanChoice === computerChoice) {
    console.log('Draw no points given');
  } else {
    let winnerChoice = getWinnerChoice(humanChoice, computerChoice);

    let humanChoiceText = capitalizeFirstLetter(humanChoice);
    let computerChoiceText = capitalizeFirstLetter(computerChoice);

    if (humanChoice === winnerChoice) {
      console.log(`You win! ${humanChoiceText} beat ${computerChoiceText}`);
      humanScore++;
    } else if (computerChoice == winnerChoice) {
      console.log(`You lose! ${computerChoiceText} beat ${humanChoiceText}`);
      computerScore++;
    } else {
      console.log('Could not decide winner');
    }
  }

  // Display the scoreboard
  printScoreBoard();
}

let n = 1;

while (n <= numberOfRounds) {
  // Verbose
  console.log(`Start of round: ${n}`);

  // Get human and computer choices
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  // Play one round
  playRound(humanChoice, computerChoice);
  console.log(`End of round: ${n}`);

  // Print the winner after the last round
  if (n === numberOfRounds) {
    printWinner();
  }

  // Increment round
  n++;
}