import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Sudoku from './sudoku.js';

$(document).ready(function() {
  let row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let row2 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
  let row3 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
  let row4 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
  let row5 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
  let row6 = [8, 9, 1, 2, 3, 4, 5, 6, 7];
  let row7 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
  let row8 = [6, 7, 8, 9, 1, 2, 3, 4, 5];
  let row9 = [9, 1, 2, 3, 4, 5, 6, 7, 8];

  let sudoku = new Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9);

  $(".results").html(sudoku.check());
});