// https://www.codewars.com/kata/52aae14aa7fd03d57400058f
// 15.07.2020

function removeZeros(a) {
  let isSorted = true;
  for (let i = 0; i < a.length - 1; i++) {
    const one = a[i];
    const two = a[i + 1];

    if ((one === '0' || one === 0) && two !== '0' && two !== 0) {
      a[i] = two;
      a[i + 1] = one;
      isSorted = false;
    }
  }

  return isSorted ? a : removeZeros(a);
}
