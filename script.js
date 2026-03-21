const gameBoard = () => {
  board = Array.from({ length: 3 }, () => Array(3).fill(0));

  function checkWin(board) {
    for (let i = 0; i < board.length; ++i) {
      for (let j = 0; j < board.length; ++j) {
        if (board[i][j] == board[i + 1][j] && board[i][j] == board[i + 2][j]) {
          //vertical
          return true;
        } else if (
          //horizontal
          board[i][j] == board[i][j + 1] &&
          board[i][j] == board[i][j + 2]
        ) {
          return true;
        } else if (
          //diagonal
          board[i][j] == board[i + 1][j + 1] &&
          board[i][j] == board[i + 2][j + 2]
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  return { board, checkWin };
};

function player(name, letter) {
  return { name, letter };
}

const playGame = () => {
  function playerTurn(player1 = true, player2 = false) {}
  player1 = player("name1", "X");
  player2 = player("name2", "O");
  board = gameBoard;

  while (board.checkWin != true) {}
};
