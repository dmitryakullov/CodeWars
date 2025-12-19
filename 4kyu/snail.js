// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
// 19.12.2025

const snail = (array) => {
  const result = [];

  const length = array[0].length;
  const height = array.length;

  let step = 0;

  while (result.length < length * height) {
    const directionIndex = step % 4;
    const circle = Math.trunc(step / 4);

    if (directionIndex === 0) {
      for (let i = circle + 0; i < length - circle; i++) result.push(array[circle][i]);
    } else if (directionIndex === 1) {
      for (let i = circle + 1; i < height - circle - 1; i++)
        result.push(array[i][length - circle - 1]);
    } else if (directionIndex === 2) {
      for (let i = length - circle - 1; i >= circle; i--)
        result.push(array[height - circle - 1][i]);
    } else {
      for (let i = height - circle - 2; i >= circle + 1; i--) result.push(array[i][circle]);
    }

    step++;
  }

  return result;
};

console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
);
