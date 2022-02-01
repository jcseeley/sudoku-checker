import Sudoku from './../src/sudoku.js';

describe('Sudoku', () => {
  let sudoku;

  beforeEach(() => {
    let row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let row2 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
    let row3 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
    let row4 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
    let row5 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
    let row6 = [8, 9, 1, 2, 3, 4, 5, 6, 7];
    let row7 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
    let row8 = [6, 7, 8, 9, 1, 2, 3, 4, 5];
    let row9 = [9, 1, 2, 3, 4, 5, 6, 7, 8];
  
    sudoku = new Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9);
  });

  test('should make a sudoku grid', () => {
    expect(sudoku.row1[3]).toEqual(4);
  });

  test('should return true if a row is legitimate', () => {
    expect(sudoku.rowCheck(sudoku.row1)).toEqual(true);
  });

  test('should return false if a row is not legitimate', () => {
    expect(sudoku.rowCheck([1, 2, 3, 3, 3, 3, 4, 8, 9])).toEqual(false);
  });
  
  test('should return true if all rows are legitimate', () => {
    expect(sudoku.check()).toEqual(true);
  });
  
  test('should return true if all columns are legitimate', () => {
    expect(sudoku.colCheck()).toEqual(true);
  });
  
  test('should return true if all squares are legitimate', () => {
    expect(sudoku.squareCheck()).toEqual(true);
  });

});