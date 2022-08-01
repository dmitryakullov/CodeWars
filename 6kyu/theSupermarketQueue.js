// https://www.codewars.com/kata/57b06f90e298a7b53d000a86
// 01.08.2022

function queueTime(customers, n) {
  if (!customers.length) return 0;

  const checkOuts = customers.slice(0, n);
  const queue = customers.slice(n);

  queue.forEach((num) => {
    const index = checkOuts.indexOf(Math.min(...checkOuts));
    checkOuts[index] += num;
  });

  return Math.max(...checkOuts);
}
