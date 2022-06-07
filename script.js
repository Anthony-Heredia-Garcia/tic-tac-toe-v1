let playerTurn;
const gameBtn = document.querySelector("button");
const gameLayout = document.querySelector(".game-layout");
const editPlayer1 = document.querySelector(".edit-player-1");
const editPlayer2 = document.querySelector(".edit-player-2");
const player1Name = document.querySelector(".player-1-name");
const player2Name = document.querySelector(".player-2-name");
const currentPlayer = document.querySelector(".current-player");
const gameBoard = document.querySelectorAll(".game-board > div");
let player1;
let player2;

gameBoard.forEach(function (i) {
  i.addEventListener("click", updateGameTile);
  i.addEventListener("click", chooseTile);
});
editPlayer1.addEventListener("click", editName);
editPlayer2.addEventListener("click", editName);
gameBtn.addEventListener("click", startGame);
gameBtn.addEventListener("click", beginTurns);

function beginTurns() {
  playerTurn = player1;
  console.log(playerTurn);
}

function updateTurn() {
  switch (playerTurn) {
    case player1:
      playerTurn = player2;
      break;
    case player2:
      playerTurn = player1;
      break;
  }
  console.log(playerTurn);
}

function editName(event) {
  switch (event.target) {
    case editPlayer1:
      player1Name.textContent = prompt("Enter a Username for Player 1");
      if (!player1Name.textContent) {
        player1Name.textContent = "Player 1";
      }
      player1 = player1Name.textContent;
      break;
    case editPlayer2:
      player2Name.textContent = prompt("Enter a Username for Player 2");
      if (!player2Name.textContent) {
        player2Name.textContent = "Player 2";
      }
      player2 = player2Name.textContent;
      break;
  }
  setPlayerNames();
}

function checkEmpty() {
  if (!player1) {
    player1Name.textContent = "Player 1";
  } else if (!player2) {
    player2Name.textContent = "Player 2";
  }
}

function startGame() {
  gameLayout.style.display = "block";
  checkEmpty();
  setPlayerNames ();
  if ((gameLayout.style.display = "block")) {
    gameBtn.textContent = "Reset Game?";
    resetGame();
  }
}

function setPlayerNames () {
  player1 = player1Name.textContent;
  player2 = player2Name.textContent;
  currentPlayer.textContent = player1;
}

function chooseTile(event) {
  event.target.setAttribute("class", "chosen");
  updatePlayerDisplay();
  updateTurn();
}

function resetGame() {
  gameBoard.forEach(function (i) {
    i.setAttribute("class", "");
    i.innerHTML = "";
  });
}

function updateGameTile(event) {
  console.log(event.target);
  if (playerTurn === player1) {
    event.target.innerHTML = "X";
  } else if (playerTurn === player2) {
    event.target.innerHTML = "O";
  }
}

function updatePlayerDisplay() {
  switch (currentPlayer.textContent) {
    case player1:
      currentPlayer.textContent = player2;
      break;
    case player2:
      currentPlayer.textContent = player1;
      break;
  }
}
