//main variables
let compscore = 0;
let playerscore = 0;
let playerChoice;
let win = false;

//main buttons
const buttons = document.querySelector(".btn");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const restart_game = document.querySelector("#restart");

//main displays
let player_msg = document.querySelector("#player_choice");
let comp_msg = document.querySelector("#comp_choice");
let win_msg = document.getElementById("win_msg");

//getting random choice from 1-3
function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3) + 1;
  return compChoice;
}

//buttons event listener
restart_game.addEventListener("click", () => {
  restart();
});

rock.addEventListener("click", () => {
  play(1, "Rock");
});
paper.addEventListener("click", () => {
  play(2, "Paper");
});
scissor.addEventListener("click", () => {
  play(3, "Scissor");
});

//main game function
function play(num, message) {
  if (!win) {
    let p = getComputerChoice();
    playerChoice = num;
    game(p);
    compMsg(p);
    player_msg.textContent = message + " " + playerscore;
    checkwin();
  } else {
    win_msg.innerHTML = "Press restart to play again";
  }
}

//computer display message
function compMsg(choice) {
  let x = choice;
  if (x === 1) {
    comp_msg.textContent = "Rock " + compscore;
  } else if (x === 2) {
    comp_msg.textContent = "Paper " + compscore;
  } else if (x === 3) {
    comp_msg.textContent = "scissors " + compscore;
  }
}

//logic for incrementing score
function game(comp_val) {
  let a = comp_val;
  if (
    (playerChoice === 1 && a === 2) ||
    (playerChoice === 2 && a === 3) ||
    (playerChoice === 3 && a === 1)
  ) {
    if (compscore < 5 && playerscore < 5) {
      compscore += 1;
    }
  } else if (
    (playerChoice === 1 && a === 3) ||
    (playerChoice === 2 && a === 1) ||
    (playerChoice === 3 && a === 2)
  ) {
    if (compscore < 5 && playerscore < 5) {
      playerscore += 1;
    }
  }
  console.log(playerscore, compscore);
}

function checkwin() {
  if (compscore === 5) {
    win = true;
    win_msg.innerText = "Computer won";
  } else if (playerscore === 5) {
    win = true;
    win_msg.innerText = "You won";
  }
}

//display and score reset
function restart() {
  playerscore = 0;
  compscore = 0;
  win_msg.innerText = "";
  player_msg.textContent = playerscore;
  comp_msg.textContent = compscore;
  win = false;
}
