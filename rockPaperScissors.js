const times = Number(prompt("How many times would you like to play"));
function rng() {
  let number = Math.floor(Math.random() * 3) + 1;
  return String(number);
}

function gameLogic(playerInput, bot) {
  if (playerInput === bot) {
    alert("It's a tie");
  } else if (
    (playerInput == "1" && bot == "3") ||
    (playerInput == "2" && bot == "1") ||
    (playerInput == "3" && bot == "2")
  ) {
    alert("You are the winner");
  } else {
    alert("You lose");
  }
}

for (i = 0; i < times; i++) {
let playerInput = prompt("1 for Rock, 2 for Paper, or 3 for Scissors");
  
  let bot = rng();
  gameLogic(playerInput, bot);
}



