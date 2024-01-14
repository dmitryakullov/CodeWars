// https://www.codewars.com/kata/513e08acc600c94f01000001/train/
// 14.01.2024

const c = (n) => {
  const hex = n < 1 ? '00' : n > 254 ? 'FF' : n.toString(16).toUpperCase();

  return hex.length === 1 ? `0${hex}` : hex;
};

const rgb = (r, g, b) => `${c(r)}${c(g)}${c(b)}`;

console.log(rgb(3, 0, 163));
