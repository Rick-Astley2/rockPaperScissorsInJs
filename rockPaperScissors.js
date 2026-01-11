const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const lightDarkBtn = document.querySelector("#lightDarkBtn");
const icon = document.querySelector("#icon");
const score = document.querySelector("#score");
const play = document.querySelector("#play");
const clickMe = document.querySelector("#clickContainer");
const imgRock = document.querySelector("#imgRock");
const winner = document.createElement("p");

function change() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.src = "./img/sun.png";
    icon.alt = "Dark Mode";
  } else {
    icon.src = "./img/moon.png";
    icon.alt = "Light Mode";
  }
}

function rng() {
  let number = Math.floor(Math.random() * 3) + 1;
  return String(number);
}

function gameLogic(userChoice, bot) {
  if (userScore == 5 || comScore == 5) {
    return;
  } else if (
    (userChoice == "rock" && bot == "1") ||
    (userChoice == "paper" && bot == "2") ||
    (userChoice == "scissors" && bot == "3")
  ) {
    winner.textContent = "It's a tie";
  } else if (
    (userChoice == "rock" && bot == "3") ||
    (userChoice == "paper" && bot == "1") ||
    (userChoice == "scissors" && bot == "2")
  ) {
    winner.textContent = "You win";
    userScore++;
    score.textContent = `${userScore} - ${comScore}`;
  } else {
    winner.textContent = "You Lose";
    comScore++;
    score.textContent = `${userScore} - ${comScore}`;
  }
}

function playRound(event) {
  let bot = rng();
  let userChoice = event.currentTarget.getAttribute("id");
  const result = document.querySelector("#result");

  gameLogic(userChoice, bot, userScore, comScore);
  result.appendChild(winner);
}

function playAgain() {
  userScore = 0;
  comScore = 0;
  score.textContent = `${userScore} - ${comScore}`;
  winner.textContent = "";
}

function rockFace() {
  imgRock.src = "./img/the-rock.png";
  imgRock.alt = "A image of The Rocks face";
}

let userScore = 0;
let comScore = 0;

lightDarkBtn.addEventListener("click", change);
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
play.addEventListener("click", playAgain);
clickMe.addEventListener("click", rockFace);
