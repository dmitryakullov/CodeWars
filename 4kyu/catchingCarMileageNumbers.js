// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
// 06.07.2023

function isInteresting(_number, awesomePhrases = []) {
  const isAwesome = (num) => awesomePhrases.some((awesome) => awesome === num);

  const isEndWithZero = (numArr) =>
    numArr[1] === '0' && numArr.slice(2).every((num) => num === '0');

  const isSameNumber = (numArr) => numArr.every((num) => num === numArr[0]);

  const isHasSubsequence = (numArr, isDecrement = false) =>
    numArr.every((_, i) => {
      const n2 = +numArr[i + 1],
        n1 = +numArr[i];
      if (isNaN(n2)) return true;

      return n2 - n1 === 1 ? true : !isDecrement && n2 - n1 === -9 ? true : false;
    });

  const isPalindrome = (numArr, num) => {
    const firstNumberHalf = numArr.slice(0, Math.floor(numArr.length / 2));
    return `${num}`.endsWith(firstNumberHalf.reverse().join(''));
  };

  const checkNumber = (number) => {
    const arrNum = `${number}`.split('');

    if (arrNum.length < 3) return false;

    return (
      isAwesome(number) ||
      isEndWithZero(arrNum) ||
      isSameNumber(arrNum) ||
      isHasSubsequence(arrNum) ||
      isHasSubsequence([...arrNum].reverse(), true) ||
      isPalindrome(arrNum, number)
    );
  };

  let result = 0;

  for (let i = 0; i < 3; i++) {
    const isInterestingNum = checkNumber(_number + i);

    if (isInterestingNum) {
      if (i === 0) {
        result = 2;

        break;
      }

      result = 1;
    }
  }

  return result;
}

console.log(isInteresting(346641, [23455, 2345, 99992, 456]));
