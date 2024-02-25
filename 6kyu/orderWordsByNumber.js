const order = (words) => {
  if (!words) return '';

  const arr = words.split(' '),
    res = [];

  arr.forEach((i) => {
    const pos = i.match(/\d+/)[0];
    res[+pos - 1] = i;
  });

  return res.join(' ');
};

console.log(order('is2 Thi1s T4est 3a'));
