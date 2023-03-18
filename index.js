// const a = "hello world";
// console.log(a);
// alert(a);

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3) + 1;
  return compChoice;
}
function getPlayerChoice() {
  let playerChoice = parseInt(
    prompt("1 - for rock \n2 - for paper\n3 - for scissor ")
  );
  return playerChoice;
}
let compscore = 0;
let playerscore = 0;
function playRound(getComputerChoice, getPlayerChoice) {
  if (getComputerChoice === getPlayerChoice) {
    compscore++;
    playerscore++;
  } else if (
    (getComputerChoice === 1 && getPlayerChoice === 2) ||
    (getComputerChoice === 2 && getPlayerChoice === 3) ||
    (getComputerChoice === 3 && getPlayerChoice === 1)
  ) {
    playerscore++;
  } else if (
    (getComputerChoice === 1 && getPlayerChoice === 3) ||
    (getComputerChoice === 2 && getPlayerChoice === 1) ||
    (getComputerChoice === 3 && getPlayerChoice == 2)
  ) {
    compscore++;
  } else {
    compscore++;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let a = getComputerChoice();
    let b = getPlayerChoice();
    playRound(a, b);
    console.log(a);
    console.log(b);
    console.log(compscore);
    console.log(playerscore);
  }
  if (compscore > playerscore) {
    alert("computer won");
  } else if (compscore < playerscore) {
    alert("you win");
  } else {
    alert("tie");
  }
}
game();
