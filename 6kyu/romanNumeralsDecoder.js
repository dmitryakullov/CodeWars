// https://www.codewars.com/kata/51b6249c4612257ac0000005
// 09.07.2023

// max safe number = 3999 = MMMCMXCIX
function createHandbook() {
  const roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const res = {};
  [...new Array(30)].forEach((_, i) => {
    const rest = (i + 1) % 9;
    const step = Math.trunc(i / 9);
    if (rest === 0) {
      res[roman[step * 2] + roman[(step + 1) * 2]] = `9${'0'.repeat(step)}`;
    } else if (rest < 4) {
      res[roman[step * 2].repeat(rest)] = `${rest}${'0'.repeat(step)}`;
    } else if (rest < 5) {
      res[roman[step * 2] + roman[step * 2 + 1]] = `4${'0'.repeat(step)}`;
    } else {
      res[roman[step * 2 + 1] + roman[step * 2].repeat(rest - 5)] = `${rest}${'0'.repeat(step)}`;
    }
  });

  return res;
}

function solution(_number) {
  const handbook = createHandbook();

  let number = _number;

  const sortedKeys = Object.keys(handbook).sort((a, b) => b.length - a.length);

  let result = 0;

  while (number.length) {
    sortedKeys.some((key) => {
      if (number.startsWith(key)) {
        result += +handbook[key];
        number = number.slice(key.length);

        return true;
      }
    });
  }

  return result;
}

console.log(solution('MDCLXVI'));
