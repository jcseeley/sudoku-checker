export default function Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9) {
  this.row1 = row1;
  this.row2 = row2;
  this.row3 = row3;
  this.row4 = row4;
  this.row5 = row5;
  this.row6 = row6;
  this.row7 = row7;
  this.row8 = row8;
  this.row9 = row9;
}

Sudoku.prototype.check = function() {
  if (this.rowCheck(this.row1) && this.rowCheck(this.row2) && this.rowCheck(this.row3) && this.rowCheck(this.row4) && this.rowCheck(this.row5) && this.rowCheck(this.row6) && this.rowCheck(this.row7) && this.rowCheck(this.row8) && this.rowCheck(this.row9)) {
    return true;
  }
  return false;
};

Sudoku.prototype.rowCheck = function(row) {
  let check = 0;
  for (let i = 1; i <= 9; i++) {
    check = 0;
    row.forEach(function(number) {
      if (number === i) {
        check = 1;
      }
    });
    if (check === 0) {
      return false;
    }
  }
  return true;
};

Sudoku.prototype.colCheck = function() {
  if (this.rowCheck([this.row1[0], this.row2[0], this.row3[0], this.row4[0], this.row5[0], this.row6[0], this.row7[0], this.row8[0], this.row9[0]]) && this.rowCheck([this.row1[1], this.row2[1], this.row3[1], this.row4[1], this.row5[1], this.row6[1], this.row7[1], this.row8[1], this.row9[1]]) && this.rowCheck([this.row1[2], this.row2[2], this.row3[2], this.row4[2], this.row5[2], this.row6[2], this.row7[2], this.row8[2], this.row9[2]]) && this.rowCheck([this.row1[3], this.row2[3], this.row3[3], this.row4[3], this.row5[3], this.row6[3], this.row7[3], this.row8[3], this.row9[3]]) && this.rowCheck([this.row1[4], this.row2[4], this.row3[4], this.row4[4], this.row5[4], this.row6[4], this.row7[4], this.row8[4], this.row9[4]]) && this.rowCheck([this.row1[5], this.row2[5], this.row3[5], this.row4[5], this.row5[5], this.row6[5], this.row7[5], this.row8[5], this.row9[5]]) && this.rowCheck([this.row1[6], this.row2[6], this.row3[6], this.row4[6], this.row5[6], this.row6[6], this.row7[6], this.row8[6], this.row9[6]]) && this.rowCheck([this.row1[7], this.row2[7], this.row3[7], this.row4[7], this.row5[7], this.row6[7], this.row7[7], this.row8[7], this.row9[7]]) && this.rowCheck([this.row1[8], this.row2[8], this.row3[8], this.row4[8], this.row5[8], this.row6[8], this.row7[8], this.row8[8], this.row9[8]])) {
    return true;
  }
  return false;
};

Sudoku.prototype.squareCheck = function() {
  if (this.rowCheck([this.row1[0], this.row1[1], this.row1[2], this.row2[0], this.row2[1], this.row2[2], this.row3[0], this.row3[1], this.row3[2]]) && this.rowCheck([this.row4[0], this.row4[1], this.row4[2], this.row5[0], this.row5[1], this.row5[2], this.row6[0], this.row6[1], this.row6[2]]) && this.rowCheck([this.row7[0], this.row7[1], this.row7[2], this.row8[0], this.row8[1], this.row8[2], this.row9[0], this.row9[1], this.row9[2]]) && this.rowCheck([this.row1[3], this.row1[4], this.row1[5], this.row2[3], this.row2[4], this.row2[5], this.row3[3], this.row3[4], this.row3[5]]) && this.rowCheck([this.row4[3], this.row4[4], this.row4[5], this.row5[3], this.row5[4], this.row5[5], this.row6[3], this.row6[4], this.row6[5]]) && this.rowCheck([this.row7[3], this.row7[4], this.row7[5], this.row8[3], this.row8[4], this.row8[5], this.row9[3], this.row9[4], this.row9[5]]) && this.rowCheck([this.row1[6], this.row1[7], this.row1[8], this.row2[6], this.row2[7], this.row2[8], this.row3[6], this.row3[7], this.row3[8]]) && this.rowCheck([this.row4[6], this.row4[7], this.row4[8], this.row5[6], this.row5[7], this.row5[8], this.row6[6], this.row6[7], this.row6[8]]) && this.rowCheck([this.row7[6], this.row7[7], this.row7[8], this.row8[6], this.row8[7], this.row8[8], this.row9[6], this.row9[7], this.row9[8]])) {
    return true;
  }
  return false;
};