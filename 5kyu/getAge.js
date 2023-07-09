// https://www.codewars.com/kata/521660e064dc2ccdd900008d
// 08.08.2022

const splitDate = (date) => [date.getFullYear(), date.getMonth() + 1, date.getDate()];

function getAge(birthDate, nowDate) {
  const last = splitDate(nowDate ? new Date(nowDate) : new Date());
  const first = splitDate(new Date(birthDate));
  const addYear = last[1] < first[1] ? -1 : last[1] > first[1] ? 0 : last[2] >= first[2] ? 0 : -1;

  return last[0] + addYear - first[0];
}

console.log(getAge(new Date('1913/01/01'), new Date('2013/01/01')));
