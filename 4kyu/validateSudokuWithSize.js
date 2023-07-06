// https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript
// 05.07.2023

class Sudoku {
  // max matrix [100*100]
  #fullCorrectResult = [...new Array(100)].map((_, i) => i + 1);
  #data;
  #correctResult;

  constructor(data) {
    this.#data = data;
    this.rowLength = data.length;
    this.squareSideLength = Math.sqrt(this.rowLength);
    this.#correctResult = this.#fullCorrectResult.slice(0, this.rowLength).join('');
  }

  #checkNumbers = (numbersArray) =>
    [...numbersArray].sort((a, b) => a - b).join('') === this.#correctResult;

  #checkRows = () => this.#data.every(this.#checkNumbers);

  #checkColumns = () =>
    this.#data.every((_, i) => {
      const column = this.#data.map((row) => row[i]);

      return this.#checkNumbers(column);
    });

  #checkSquare = () => {
    const squareInLine = new Array(this.rowLength).fill([]);

    for (let i = 0; i < this.rowLength; i++) {
      for (let j = 0; j < this.rowLength; j++) {
        const cell =
          Math.floor(i / this.squareSideLength) * (this.squareSideLength - 1) +
          Math.floor(i / this.squareSideLength) +
          Math.floor(j / this.squareSideLength);
        squareInLine[cell] = [...squareInLine[cell], this.#data[i][j]];
      }
    }

    return squareInLine.every(this.#checkNumbers);
  };

  isValid = () => this.#checkRows() && this.#checkColumns() && this.#checkSquare();
}

// const validAnswer = new Sudoku([
//   [7, 8, 4, 1, 5, 9, 3, 2, 6],
//   [5, 3, 9, 6, 7, 2, 8, 4, 1],
//   [6, 1, 2, 4, 3, 8, 7, 5, 9],

//   [9, 2, 8, 7, 1, 5, 4, 6, 3],
//   [3, 5, 7, 8, 4, 6, 1, 9, 2],
//   [4, 6, 1, 9, 2, 3, 5, 8, 7],

//   [8, 7, 6, 3, 9, 4, 2, 1, 5],
//   [2, 4, 3, 5, 6, 1, 9, 7, 8],
//   [1, 9, 5, 2, 8, 7, 6, 3, 4],
// ]);

// console.log(validAnswer.isValid());
