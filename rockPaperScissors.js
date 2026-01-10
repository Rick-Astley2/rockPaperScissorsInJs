const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


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
    alert("It's a tie");
  } else if (
    (userChoice == "rock" && bot == "3") ||
    (userChoice == "paper" && bot == "1") ||
    (userChoice == "scissors" && bot == "2")
  ) {
    alert("You are the winner");
  } else {
    alert("You lose");
  }
}

function playRound(event) {
  let bot = rng();
  let userChoice = event.target.id

  gameLogic(userChoice, bot);
}

rock.addEventListener("click", playRound)
paper.addEventListener("click", playRound)
scissors.addEventListener("click", playRound)








