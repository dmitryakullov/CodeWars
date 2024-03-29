// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
// 22.08.2022

function sortArray(arr) {
  const oddNum = [];
  const evenNum = arr.map((num) => {
    if (num % 2 === 0) return num;
    oddNum.push(num);
    return null;
  });
  const sortedOdd = oddNum.sort((a, b) => a - b);

  return evenNum.map((el) => (el === null ? sortedOdd.shift() : el));
}

console.log(sortArray([2, 8, 6, 4, 3, 7, 8, 9, 0, 9, 7, 5, 4, 3, 1]));
