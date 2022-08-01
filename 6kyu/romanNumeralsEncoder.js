// https://www.codewars.com/kata/51b62bf6a9c58071c600001b
// 18.07.2020

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

const solution = (number) => {
  const handbook = createHandbook();
  const numLength = String(number).length;

  return String(number)
    .split('')
    .map((num, index) => {
      if (num === '0') return '';

      const fullNum = num + '0'.repeat(numLength - (index + 1));
      let response;
      Object.keys(handbook).forEach((key) => {
        if (handbook[key] == fullNum) {
          response = key;
        }
      });
      return response;
    })
    .join('');
};
