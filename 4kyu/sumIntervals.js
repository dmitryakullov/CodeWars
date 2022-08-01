// https://www.codewars.com/kata/52b7ed099cdc285c300001cd
// 16.07.2020

const sumIntervals = (intervals) =>
  intervals
    .sort((a, b) => a[0] - b[0])
    .reduce((a, b) => {
      const L = a.length;
      if (!L) return [b];
      if (a[L - 1][1] < b[0]) return [...a, b];
      if (a[L - 1][1] > b[1]) return [...a];
      // a[L - 1][1] === b[0] || a[L - 1][1] <= b[1]
      a[L - 1][1] = b[1];
      return [...a];
    }, [])
    .reduce((a, b) => a + (b[1] - b[0]), 0);
