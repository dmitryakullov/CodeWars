// https://www.codewars.com/kata/5842df8ccbd22792a4000245
// 17.08.2022

function expandedForm(num) {
  return [...String(num)].reduce((a, b, i, z) => {
    if (b === '0') return a;
    return `${a}${i === 0 ? '' : ' + '}${b}${'0'.repeat(z.length - 1 - i)}`;
  }, '');
}

console.log(expandedForm(70304));
