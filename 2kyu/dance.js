// https://www.codewars.com/kata/58f58dc3663082a4ba000033/train/javascript
// TIME

// Available moves from a cell based on its direction
// OK: (→) - ('↑', '↗', '→', '↘', '↓')
// NO: (→) - ('↙', '←', '↖')

console.time();

const getPositionsAroundCell = (i, j) => [
  { row: i, col: j - 1, direction: '←' },
  { row: i - 1, col: j - 1, direction: '↖' },
  { row: i - 1, col: j, direction: '↑' },
  { row: i - 1, col: j + 1, direction: '↗' },
  { row: i, col: j + 1, direction: '→' },
  { row: i + 1, col: j + 1, direction: '↘' },
  { row: i + 1, col: j, direction: '↓' },
  { row: i + 1, col: j - 1, direction: '↙' },
];

const getExistedPositionsOnTheBoard = (cells, maxRow, maxCol) =>
  cells.filter(({ row, col }) => row >= 0 && row < maxRow && col >= 0 && col < maxCol);

const getValidPositions = (sliceIndex, i, j, maxRow, maxCol) => {
  const positionsList = [...getPositionsAroundCell(i, j), ...getPositionsAroundCell(i, j)];

  const allowedMovementDirections = positionsList.slice(sliceIndex, sliceIndex + 5);

  return getExistedPositionsOnTheBoard(allowedMovementDirections, maxRow, maxCol);
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
  S: (i, j, maxRow, maxCol) =>
    getExistedPositionsOnTheBoard(getPositionsAroundCell(i, j), maxRow, maxCol),
};

function dance(stringDanceFloor) {
  const rows = stringDanceFloor.split('\n');
  const rowCount = rows.length;
  const colCount = rows[0].length;

  const configuredDanceFloor = rows.map((row, i) =>
    row.split('').map((cell, j) => ({
      row: i,
      col: j,
      direction: cell,
      availableSteps: directions[cell](i, j, rowCount, colCount),
    }))
  );

  const danceFloorWithFilteredAvailableSteps = configuredDanceFloor.map((row) =>
    row.map((cell) => {
      const filteredAvailableSteps = cell.availableSteps.filter(({ row, col }) => {
        const nearbyCell = configuredDanceFloor[row][col];

        if (nearbyCell.direction === 'S') return true;

        const isOpposingArrow = nearbyCell.availableSteps.some((move, index) => {
          const isExistMatch = move.row === cell.row && move.col === cell.col;
          if (!isExistMatch) return false;

          return index !== 0 && index !== 4;
        });

        return !isOpposingArrow;
      });
      return { ...cell, availableSteps: filteredAvailableSteps };
    })
  );

  const possibleDanceSteps = [];

  const starts = danceFloorWithFilteredAvailableSteps
    .flat()
    .filter((value) => value.direction === 'S');

  const counter = (cell, sequence) => {
    const { row, col, direction, availableSteps } = cell;
  };

  starts.forEach((S) => {
    console.log(S);
  });
}

dance('↖→↓←↗\n↑←↓→↓\n↑→S←↓\n↑←↓→↓\n↙→↑←↘');

console.timeEnd();
// ↖→↓←↗
// ↑↖↓→↓

// row: 2,
// col: 2,
// dir: 'S',
// availableSteps: [
//   { row: 2, col: 1, dir: '←' },
//   { row: 1, col: 1, dir: '↖' },
//   { row: 1, col: 2, dir: '↑' },
//   { row: 1, col: 3, dir: '↗' },
//   { row: 2, col: 3, dir: '→' },
//   { row: 3, col: 3, dir: '↘' },
//   { row: 3, col: 2, dir: '↓' },
//   { row: 3, col: 1, dir: '↙' }
// ]
