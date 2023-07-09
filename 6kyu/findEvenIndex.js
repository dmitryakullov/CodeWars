// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
// 25.08.2022

function findEvenIndex(arr) {
  let result = -1;
  let left = 0;
  let right = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length; i++) {
    left += arr[i];
    right -= arr[i - 1] !== undefined ? arr[i - 1] : 0;
    if (left === right) {
      result = i;
      break;
    }
  }

  return result;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
