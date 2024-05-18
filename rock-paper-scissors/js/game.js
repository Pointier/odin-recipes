function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choiceInt = getRandomInt(3) + 1;
  let choice = "";
  switch (choiceInt) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissor";
      break;

    default:
      console.log("unexpected value");
      break;
  }
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Choose between rock paper scissor");
  return choice;
}

function getWinner(humanChoice, computerChoice) {
  const beatenBy = {
    rock: "paper",
    paper: "scissor",
    scissor: "rock",
  };

  if (humanChoice === computerChoice) {
    return "draw";
  } else if (beatenBy[humanChoice] === computerChoice) {
    return "computer";
  } else if (beatenBy[computerChoice] === humanChoice) {
    return "human";
  } else {
    return "problem in logic";
  }
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const result = getWinner(humanChoice, computerChoice);
    switch (result) {
      case "draw":
        console.log(`you both choose the same ${humanChoice}`);
        break;
      case "computer":
        console.log(`${humanChoice} loose to ${computerChoice}`);
        computerScore++;
        break;
      case "human":
        console.log(`${humanChoice} win over ${computerChoice}`);
        humanScore++;
        break;
      case "problem in logic":
        console.log("Choose between rock, paper or scissor please!");
    }
  }
  const numberOfRounds = 5;
  for (let i = 0; i < numberOfRounds; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }
  console.log(`you did win ${humanScore} round vs ${computerScore} round`);
}

playGame();
