// https://www.codewars.com/kata/59c3e819d751df54e9000098
// 27.08.2022

const getConsectiveItems = (items, key) => {
  let check = false;
  const res = [];
  `${items}`.split('').forEach((a) => {
    if (a === String(key)) {
      if (check) {
        res[0]++;
        return;
      }
      check = true;
      res.unshift(1);
      return;
    }
    check = false;
  });
  return res.length ? Math.max(...res) : 0;
};

console.log(getConsectiveItems('abcdaaadse', 'a'));
