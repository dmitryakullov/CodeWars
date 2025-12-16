// https://www.codewars.com/kata/58f58dc3663082a4ba000033/train/javascript

const getAllPositions = (i, j) => [
  [i, j - 1],
  [i - 1, j - 1],
  [i - 1, j],
  [i - 1, j + 1],
  [i, j + 1],
  [i + 1, j + 1],
  [i + 1, j],
  [i + 1, j - 1],
];

const getExistedPositions = (cells, maxRow, maxCol) =>
  cells.filter(([row, col]) => row >= 0 && row < maxRow && col >= 0 && col < maxCol);

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

function dance(raw) {
  const init = raw
    .split('\n')
    .map((row, i) =>
      row.split('').map((cell, j) => ({ row: i, col: j, value: cell, isTouched: false }))
    );

  const starts = init.flat().filter((value) => value.value === 'S');

  console.log(starts);
}

dance('↖→↓←↗\n↑←↓→↓\n↑→S←↓\n↑←↓→↓\n↙→↑←↘');

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
