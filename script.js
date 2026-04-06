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

  function isValid(board) {
    for (let i = 0; i < board.length; ++i) {
      for (let j = 0; j < board.length; ++j) {
        if (board[i][j] == "0") {
          return true;
        }
      }
    }
    return false;
  }
  return { board, checkWin, isValid };
};

function player(name, letter, turn) {
  return { name, letter, turn };
}

const playGame = () => {
  function currentPlayer(player1, player2) {
    let currentPlayer;
    if (player1.turn == true) {
      currentPlayer = player1;
      return currentPlayer;
    } else if (player2.turn == true) {
      currentPlayer = player2;
      return currentPlayer;
    }
  }

  function makeMove(player, board, x, y) {
    board[x][y] = player.letter;
    return board;
  }

  function prompt() {
    console.log("Where would you like to play? Ex: A1");
  }

  function printBoard(board) {
    console.log(`
     |  1   2   3
    -----------------
  A |  ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
    -----------------
  B |  ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
    -----------------
  C |  ${board[2][0]} | ${board[2][1]} | ${board[2][2]}
    -----------------
  `);
  }

  player1 = player("name1", "X", true);
  player2 = player("name2", "O", false);
  board = gameBoard();

  while (board.checkWin != true) {
    player = currentPlayer(player1, player2);
    board = printBoard(board);
    prompt();
    let x = process.argv[1];
    let y = process.argv[1];
    makeMove(player, board, x, y);
  }
};
