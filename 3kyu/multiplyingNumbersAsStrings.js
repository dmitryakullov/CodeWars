// https://www.codewars.com/kata/5923fbc72eafa9bcff00011a/train/javascript
// 19.07.2022

const prepareNum = (str) => (str.indexOf('.') !== -1 ? str.replace(/\.*0*$/g, '') : str);

const removeDots = (changeAndRemove, onlyRemove, biggerLen, len = 0) => {
  return [
    changeAndRemove.replace('.', '') + '0'.repeat(biggerLen - len),
    onlyRemove.replace('.', ''),
    biggerLen * 2,
  ];
};

const transformToSafe = (a, b) => {
  const dotA = a.indexOf('.');
  const dotB = b.indexOf('.');
  const lenA = dotA !== -1 && a.length - dotA - 1;
  const lenB = dotB !== -1 && b.length - dotB - 1;

  if (!lenA && !lenB) return [a, b];
  if (!lenA && lenB) return removeDots(a, b, lenB);
  if (!lenB && lenA) return removeDots(b, a, lenA);
  if (lenA === lenB) return [a.replace('.', ''), b.replace('.', ''), lenA * 2];
  if (lenA < lenB) return removeDots(a, b, lenB, lenA);
  return removeDots(b, a, lenA, lenB);
};

function multiply(n, o) {
  const [x, y, endLength] = transformToSafe(prepareNum(n), prepareNum(o));
  let num = String(BigInt(x) * BigInt(y));

  if (!endLength) return num;
  if (num === '0') return '0';

  const isStartWithMinus = num.startsWith('-');
  const isNumberSmall = isStartWithMinus ? endLength >= num.length - 1 : endLength >= num.length;
  if (isNumberSmall) {
    if (isStartWithMinus) {
      num = `-${'0'.repeat(endLength - num.length + 1)}${num}`;
    } else {
      num = '0'.repeat(endLength - num.length + 1) + num;
    }
  }

  const numArr = num.split('');
  numArr.splice(-endLength, 0, '.');
  return prepareNum(numArr.join(''));
}
