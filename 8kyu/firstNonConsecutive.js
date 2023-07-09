// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
// 08.08.2022

function firstNonConsecutive(arr) {
  let res = null;
  arr.forEach((a, i) => {
    if (i + arr[0] !== a && res === null) {
      res = a;
    }
  });
  return res;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
