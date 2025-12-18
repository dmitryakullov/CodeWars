// https://www.codewars.com/kata/58f58dc3663082a4ba000033/train/javascript
// 18.12.2025

// Available moves from a cell based on its direction
// OK: (→) - ('↑', '↗', '→', '↘', '↓')
// NO: (→) - ('↙', '←', '↖')

const getPositionsAroundCell = (i, j) => [
  { row: i, col: j - 1, moveDirection: '←', oppositeArrows: ['↘', '→', '↗'] },
  { row: i - 1, col: j - 1, moveDirection: '↖', oppositeArrows: ['→', '↘', '↓'] },
  { row: i - 1, col: j, moveDirection: '↑', oppositeArrows: ['↘', '↓', '↙'] },
  { row: i - 1, col: j + 1, moveDirection: '↗', oppositeArrows: ['↓', '↙', '←'] },
  { row: i, col: j + 1, moveDirection: '→', oppositeArrows: ['↙', '←', '↖'] },
  { row: i + 1, col: j + 1, moveDirection: '↘', oppositeArrows: ['←', '↖', '↑'] },
  { row: i + 1, col: j, moveDirection: '↓', oppositeArrows: ['↖', '↑', '↗'] },
  { row: i + 1, col: j - 1, moveDirection: '↙', oppositeArrows: ['↑', '↗', '→'] },
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
  let initialCell = null;

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
      const filteredAvailableSteps = cell.availableSteps.filter(({ row, col, oppositeArrows }) => {
        const nearbyCell = configuredDanceFloor[row][col];

        const isOpposingArrow = oppositeArrows.some((arrow) => arrow === nearbyCell.direction);

        return !isOpposingArrow;
      });

      const updatedCell = { ...cell, availableSteps: filteredAvailableSteps };

      if (updatedCell.direction === 'S') {
        initialCell = updatedCell;
      }

      return updatedCell;
    })
  );

  const possibleDanceSteps = [];

  const recursiveCounter = (cell, sequence) => {
    const { row, col, direction, availableSteps } = cell;

    if (direction === 'S' && sequence.length > 0) {
      possibleDanceSteps.push(sequence.map(({ direction }) => direction).join(''));

      return;
    }

    if (availableSteps.length === 0) {
      possibleDanceSteps.push('');

      return;
    }

    availableSteps.forEach((nextCellStep) => {
      const isCellTouched = sequence.some(
        (step) =>
          step.row === nextCellStep.row &&
          step.col === nextCellStep.col &&
          step.prevDirection !== 'S'
      );

      if (isCellTouched) {
        possibleDanceSteps.push('');

        return;
      }

      recursiveCounter(danceFloorWithFilteredAvailableSteps[nextCellStep.row][nextCellStep.col], [
        ...sequence,
        { row, col, direction: nextCellStep.moveDirection, prevDirection: direction },
      ]);
    });
  };

  recursiveCounter(initialCell, []);

  return possibleDanceSteps.sort((a, b) => b.length - a.length)[0];
}

console.log(dance('↖→↓←↗\n↑←↓→↓\n↑→S←↓\n↑←↓→↓\n↙→↑←↘'));

//
//
//
//
//

// Iterative counter implementation (recursion replacement):
//
// const iterativeCounter = (cell, sequence) => {
//   const stack = [{ cell, sequence }];

//   while (stack.length > 0) {
//     const node = stack.pop();

//     const { row, col, direction, availableSteps } = node.cell;

//     if (direction === 'S' && node.sequence.length > 0) {
//       possibleDanceSteps.push(node.sequence.map(({ direction }) => direction).join(''));

//       continue;
//     }

//     if (availableSteps.length === 0) {
//       possibleDanceSteps.push('');

//       continue;
//     }

//     availableSteps.forEach((nextCellStep) => {
//       const isCellTouched = node.sequence.some(
//         (step) =>
//           step.row === nextCellStep.row &&
//           step.col === nextCellStep.col &&
//           step.prevDirection !== 'S'
//       );

//       if (isCellTouched) {
//         possibleDanceSteps.push('');

//         return;
//       }

//       stack.push({
//         cell: danceFloorWithFilteredAvailableSteps[nextCellStep.row][nextCellStep.col],
//         sequence: [
//           ...node.sequence,
//           { row, col, direction: nextCellStep.moveDirection, prevDirection: direction },
//         ],
//       });
//     });
//   }
// };
