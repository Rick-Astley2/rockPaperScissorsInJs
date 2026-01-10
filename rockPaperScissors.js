const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const winner = document.createElement("p")
const lightDarkBtn = document.querySelector("#lightDarkBtn");
const icon = document.querySelector("#icon")


function change() {
  document.body.classList.toggle("dark");
  
  if (document.body.classList.contains("dark")) {
    icon.src = "./img/sun.png"
    icon.alt = "Dark Mode"
  } else {
    icon.src = "./img/moon.png";
    icon.alt = "Light Mode"
  }
}

lightDarkBtn.addEventListener("click", change);

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
