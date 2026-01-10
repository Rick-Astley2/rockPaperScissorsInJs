const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const winner = document.createElement("p")

function rng() {
  let number = Math.floor(Math.random() * 3) + 1;
  return String(number);
}

function gameLogic(userChoice, bot) {
  if (
    (userChoice == "rock" && bot == "1") ||
    (userChoice == "paper" && bot == "2") ||
    (userChoice == "scissors" && bot == "3")
  ) {
    winner.textContent = "It's a tie"
  } else if (
    (userChoice == "rock" && bot == "3") ||
    (userChoice == "paper" && bot == "1") ||
    (userChoice == "scissors" && bot == "2")
  ) {
    winner.textContent = "You win"
  } else {
    winner.textContent = "You Lose"
  }
}

function playRound(event) {
  let bot = rng();
  let userChoice = event.currentTarget.getAttribute("id");
  const result = document.querySelector("#result")


  gameLogic(userChoice, bot);
  result.appendChild(winner)
}

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
