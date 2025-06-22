// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
// 22.06.2025

const BRACES = {
  ')': '(',
  '}': '{',
  ']': '[',
};
const openBracesRegexp = /\(|\{|\[/;

function validBraces(braces) {
  const countStore = [];

  const isRemoveAllCloseBraces = braces.split('').every((sign) => {
    if (openBracesRegexp.test(sign)) {
      countStore.push(sign);
      return true;
    }

    if (countStore.length && sign && countStore[countStore.length - 1] === BRACES[sign]) {
      countStore.pop();

      return true;
    }

    return false;
  });

  return isRemoveAllCloseBraces && countStore.length === 0;
}

console.log(validBraces('(())'));
