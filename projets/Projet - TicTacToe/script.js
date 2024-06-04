let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameEnded = false;
let player1 = "";
let player2 = "";

function placeMarker(index) {
  if (!gameEnded && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // lignes
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // colonnes
    [0, 4, 8],
    [2, 4, 6], // diagonales
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      const winner = currentPlayer === "X" ? player1 : player2;
      displayResult(`${winner} a gagné !`);
      gameEnded = true;
      return;
    }
  }

  if (!board.includes("")) {
    displayResult("Match nul !");
    gameEnded = true;
  }
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameEnded = false;
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  hideResult();
}

function displayResult(message) {
  const resultElement = document.getElementById("result");
  resultElement.innerText = message;
  resultElement.classList.remove("hidden");
}

function hideResult() {
  const resultElement = document.getElementById("result");
  resultElement.classList.add("hidden");
}

function updatePlayers() {
  player1 = document.getElementById("player1").value || "Joueur 1";
  player2 = document.getElementById("player2").value || "Joueur 2";

  document.getElementById("player1Symbol").innerText = " (X)";
  document.getElementById("player2Symbol").innerText = " (O)";
}

const player1Input = document.getElementById("player1");
player1Input.addEventListener("input", updatePlayers);

const player2Input = document.getElementById("player2");
player2Input.addEventListener("input", updatePlayers);

updatePlayers();
