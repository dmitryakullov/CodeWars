// https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript
// 22.12.2025

const getModule = (num, m) => {
  const integer = num / m;

  return num - integer * m;
};

const lastDigitCycles = {
  2: [2, 4, 8, 6],
  3: [3, 9, 7, 1],
  4: [4, 6],
  7: [7, 9, 3, 1],
  8: [8, 4, 2, 6],
  9: [9, 1],
};

function lastDigit(n, m) {
  if (m === 0n) return 1n;

  const strNum = String(n);
  const lastDigit = Number(strNum[strNum.length - 1]);

  if ([0, 1, 5, 6].includes(lastDigit)) return BigInt(lastDigit);

  const length = [4, 9].includes(lastDigit) ? 2n : 4n;

  const mMod = getModule(m, length);

  const cycle = lastDigitCycles[`${lastDigit}`];
  const position = `${mMod === 0n ? length - 1n : mMod - 1n}`;

  return BigInt(cycle[position]);
}

console.log(lastDigit(4n, 2n));
