// https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061/train/javascript
// 23.07.2023

const countRepeats = (str) =>
  str.split('').reduce((acc, cur, i) => (cur === str[i + 1] ? ++acc : acc), 0);

console.log(countRepeats('AABCCDA'));
