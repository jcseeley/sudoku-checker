export default function Sudoku() {
  this.row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row2 = [1, 2, 3, 4, 5, 5, 9, 8, 9];
  this.row3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

Sudoku.prototype.rowCheck = function(row) {
  let check = 0;
  for (let i = 1; i <= 9; i++) {
    check = 0;
    row.forEach(function(number) {
      if (number === i) {
        check = 1;
      }
    })
    if (check === 0) {
      return false;
    }
  }
  return true;
};
