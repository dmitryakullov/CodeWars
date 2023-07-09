// https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript
// 09.07.2023

function landPerimeter(arr) {
  let totalPerimeter = 0;

  const isX = (cell) => (cell === 'X' ? 1 : 0);

  const checkCells = (i, j) => {
    return (
      4 -
      isX(arr[i - 1] && arr[i - 1][j]) -
      isX(arr[i + 1] && arr[i + 1][j]) -
      isX(arr[i][j - 1]) -
      isX(arr[i][j + 1])
    );
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      totalPerimeter += arr[i][j] === 'X' ? checkCells(i, j) : 0;
    }
  }

  return `Total land perimeter: ${totalPerimeter}`;
}

const result = landPerimeter([
  'OXOOOX',
  'OXOXOO',
  'XXOOOX',
  'OXXXOO',
  'OOXOOX',
  'OXOOOO',
  'OOXOOX',
  'OOXOOO',
  'OXOOOO',
  'OXOOXX',
]);

console.log(result);
