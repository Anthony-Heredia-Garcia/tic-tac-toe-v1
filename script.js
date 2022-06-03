const gameBtn = document.querySelector('button');
const gameLayout = document.querySelector('.game-layout');
const editPlayer1 = document.querySelector('.edit-player-1');
const editPlayer2 = document.querySelector('.edit-player-2');
const player1Name = document.querySelector('.player-1-name');
const player2Name = document.querySelector('.player-2-name');
const currentPlayer = document.querySelector('.current-player');
const gameBoard = document.querySelectorAll('.game-board > div');
let player1;
let player2;

gameBoard.forEach(function(i) {
  i.addEventListener('click', chooseTile);
});
editPlayer1.addEventListener('click', editName);
editPlayer2.addEventListener('click', editName);
gameBtn.addEventListener('click', startGame);

function editName(event) {
  switch (event.target) {
  case editPlayer1:
    player1 = prompt('Enter a Username for Player 1', '');
    player1Name.textContent = player1;
    break;
  case editPlayer2:
    player2 = prompt('Enter a Username for Player 2', '');
    player2Name.textContent = player2;
    break;
}}

function startGame() {
  gameLayout.style.display = 'block';
  currentPlayer.textContent = player1;
  if (gameLayout.style.display = 'block') {
    resetGame();
  }
}

function chooseTile(event) {
  event.target.setAttribute('id', 'chosen');
}

function resetGame() {
  gameBoard.forEach(function(i) {
    i.setAttribute('id', '');
  })
}