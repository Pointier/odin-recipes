const gameBoard = (function () {
  const row = 3;
  const column = 3;
  const board = [];

  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i][j] = "empty";
    }
  }

  print = () => console.log(board);
  return { print };
})();

gameBoard.print();
