// https://www.codewars.com/kata/58f58dc3663082a4ba000033/train/javascript

const getAllPositions = (i, j) => [
  { row: i, col: j - 1, dir: '←' },
  { row: i - 1, col: j - 1, dir: '↖' },
  { row: i - 1, col: j, dir: '↑' },
  { row: i - 1, col: j + 1, dir: '↗' },
  { row: i, col: j + 1, dir: '→' },
  { row: i + 1, col: j + 1, dir: '↘' },
  { row: i + 1, col: j, dir: '↓' },
  { row: i + 1, col: j - 1, dir: '↙' },
];

const getExistedPositions = (cells, maxRow, maxCol) =>
  cells.filter(({ row, col }) => row >= 0 && row < maxRow && col >= 0 && col < maxCol);

const getValidPositions = (sliceIndex, i, j, maxRow, maxCol) => {
  const positions = [...getAllPositions(i, j), ...getAllPositions(i, j)];

  const allowedMovementDirections = positions.slice(sliceIndex, sliceIndex + 5);

  return getExistedPositions(allowedMovementDirections, maxRow, maxCol);
};

const directions = {
  '↑': (i, j, maxRow, maxCol) => getValidPositions(0, i, j, maxRow, maxCol),
  '↗': (i, j, maxRow, maxCol) => getValidPositions(1, i, j, maxRow, maxCol),
  '→': (i, j, maxRow, maxCol) => getValidPositions(2, i, j, maxRow, maxCol),
  '↘': (i, j, maxRow, maxCol) => getValidPositions(3, i, j, maxRow, maxCol),
  '↓': (i, j, maxRow, maxCol) => getValidPositions(4, i, j, maxRow, maxCol),
  '↙': (i, j, maxRow, maxCol) => getValidPositions(5, i, j, maxRow, maxCol),
  '←': (i, j, maxRow, maxCol) => getValidPositions(6, i, j, maxRow, maxCol),
  '↖': (i, j, maxRow, maxCol) => getValidPositions(7, i, j, maxRow, maxCol),
  S: (i, j, maxRow, maxCol) => getExistedPositions(getAllPositions(i, j), maxRow, maxCol),
};

function dance(stringDanceFloor) {
  const rows = stringDanceFloor.split('\n');
  const rowCount = rows.length;
  const colCount = rows[0].length;

  const configuredDanceFloor = rows.map((row, i) =>
    row.split('').map((cell, j) => ({
      row: i,
      col: j,
      value: cell,
      isTouched: false,
      availableMoves: directions[cell](i, j, rowCount, colCount),
    }))
  );

  const starts = configuredDanceFloor.flat().filter((value) => value.value === 'S');

  const counter = (cell, danceFloor) => {};

  starts.map((S) => {
    console.log(S);
  });
}

dance('↖→↓←↗\n↑←↓→↓\n↑→S←↓\n↑←↓→↓\n↙→↑←↘');

// row: 2,
// col: 2,
// value: 'S',
// isTouched: false,
// availableMoves: [
//   { row: 2, col: 1, dir: '←' },
//   { row: 1, col: 1, dir: '↖' },
//   { row: 1, col: 2, dir: '↑' },
//   { row: 1, col: 3, dir: '↗' },
//   { row: 2, col: 3, dir: '→' },
//   { row: 3, col: 3, dir: '↘' },
//   { row: 3, col: 2, dir: '↓' },
//   { row: 3, col: 1, dir: '↙' }
// ]

// console.log(
//   JSON.stringify(
//     Object.entries(directions).map(([key, fn]) => {
//       const res = fn(4, 4, 5, 5);
//       return [key, res];
//     }),
//     null,
//     2
//   )
// );
