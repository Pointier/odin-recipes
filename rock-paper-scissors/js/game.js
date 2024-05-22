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

function getHumanChoice(str) {
  let choice = str;
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

let computerScore = 0;
let humanScore = 0;
function playRound(humanChoice, computerChoice, textResult, score, winner) {
  humanChoice = humanChoice.toLowerCase();
  const result = getWinner(humanChoice, computerChoice);
  switch (result) {
    case "draw":
      textResult.textContent = `you both choose the same ${humanChoice}`;
      break;
    case "computer":
      textResult.textContent = `${humanChoice} loose to ${computerChoice}`;
      computerScore++;
      score.textContent = `Human ${humanScore} Computer ${computerScore}`;
      break;
    case "human":
      textResult.textContent = `${humanChoice} win over ${computerChoice}`;
      humanScore++;
      score.textContent = `Human ${humanScore} Computer ${computerScore}`;
      break;
    case "problem in logic":
      console.log("Choose between rock, paper or scissor please!");
  }
  if (humanScore == 5) {
    winner.textContent = "Human win !";
    humanScore = 0;
    computerScore = 0;
  }
  if (computerScore == 5) {
    winner.textContent = "Computer win ! ";
    humanScore = 0;
    computerScore = 0;
  }
}

const gameDiv = document.getElementById("game");

const rockButton = document.createElement("button");
rockButton.textContent = "rock";
const paperButton = document.createElement("button");
paperButton.textContent = "paper";
const scissorButton = document.createElement("button");
scissorButton.textContent = "scissor";

gameDiv.appendChild(rockButton);
gameDiv.appendChild(paperButton);
gameDiv.appendChild(scissorButton);

buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent, getComputerChoice(), result, score, winner);
  });
});

const displayResult = document.createElement("div");

const result = document.createElement("span");
result.textContent = "Result displayed here";
displayResult.appendChild(result);

const score = document.createElement("p");
score.textContent = `Human ${humanScore} Computer ${computerScore}`;
displayResult.appendChild(score);
const winner = document.createElement("p");
displayResult.appendChild(winner);
gameDiv.appendChild(displayResult);
