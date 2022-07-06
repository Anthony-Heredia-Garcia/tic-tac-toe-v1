let playerTurn;
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const gameBtn = document.querySelector("button");
const gameLayout = document.querySelector(".game-layout");
const editPlayer1 = document.querySelector(".edit-player-1");
const editPlayer2 = document.querySelector(".edit-player-2");
const player1Name = document.querySelector(".player-1-name");
const player2Name = document.querySelector(".player-2-name");
const currentPlayer = document.querySelector(".current-player");
const gameBoard = document.querySelectorAll(".game-board > div");
const modal = document.querySelector(".modal");
const playAgainBtn = document.querySelector(".playAgain");
const winner = document.querySelector(".winner");
let player1;
let player2;

function initializeGameBoard () {
  gameBoard.forEach(function (i) {
    i.removeEventListener('click', updateGameTile); 
    i.removeEventListener('click', chooseTile); 
    i.addEventListener("click", updateGameTile, {once: true});
    i.addEventListener("click", chooseTile, {once: true});
  });
}

playAgainBtn.addEventListener("click", startGame);
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

function startGame() {
  gameLayout.style.display = "block";
  modal.close();
  setPlayerNames ();
  disableEdit();
  if ((gameLayout.style.display = "block")) {
    gameBtn.textContent = "Reset Game?";
    resetGame();
    initializeGameBoard();
  }
}

function setPlayerNames () {
  player1 = player1Name.textContent;
  player2 = player2Name.textContent;
  currentPlayer.textContent = player1;
}

function disableEdit() {
  editPlayer1.style.display = "none";
  editPlayer2.style.display = "none";
}

function chooseTile(event) {
  event.target.setAttribute("class", "chosen");
  
  
  if (checkForWin()) {
    modal.showModal();
    winner.textContent = `${currentPlayer.textContent} Wins!`
  } else if (isDraw()) {
    modal.showModal();
    winner.textContent = "Draw!"
  } else{
    updatePlayerDisplay();
    updateTurn();
  }
}

function resetGame() {
  gameBoard.forEach(function (i) {
    i.setAttribute("class", "");
    i.innerHTML = "";
  });
}

function updateGameTile(event) {
  console.log(event.target);
  if (playerTurn == player1) {
    event.target.innerHTML = "X";
  } else if (playerTurn == player2) {
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

// function checkForWin() {
//   return WINNING_COMBOS.some (combination => {
//     return combination.every(index => {
//        return gameBoard[index].innerHTML.includes("X")
//     })
//   })
// }

function checkForWin() {
  switch (playerTurn) {
    case player1:
    return WINNING_COMBOS.some (combination => {
      return combination.every(index => {
         return gameBoard[index].innerHTML.includes("X")
      })
    })
    case player2: 
    return WINNING_COMBOS.some (combination => {
      return combination.every(index => {
         return gameBoard[index].innerHTML.includes("O")
      })
  })
}}

function isDraw() {
  return [...gameBoard].every(cell => {
    return cell.innerHTML.includes("X") || cell.innerHTML.includes("O")
  })
}