import Sudoku from './../src/sudoku.js';

describe('Sudoku', () => {

  test('should make a sudoku grid', () => {
    const sudoku = new Sudoku();
    expect(sudoku.row1[3]).toEqual(4);
  });

  test('should return true if a row is legitimate', () => {
    const sudoku = new Sudoku();
    expect(sudoku.rowCheck(sudoku.row1)).toEqual(true);
  });

  test('should return false if a row is not legitimate', () => {
    const sudoku = new Sudoku();
    expect(sudoku.rowCheck(sudoku.row2)).toEqual(false);
  });

});