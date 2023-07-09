// https://www.codewars.com/kata/530e15517bc88ac656000716
// 16.08.2022

const rot13 = (message) =>
  [...message]
    .map((letter) => {
      const code = letter.charCodeAt();
      if (code < 65 || code > 122 || (code > 90 && code < 97)) return letter;

      const max = code <= 90 ? 90 : 122;
      const newCode = code + 13;
      return String.fromCharCode(newCode > max ? newCode - max + (max - 26) : newCode);
    })
    .join('');

console.group(rot13('HGFrcashdvjhv'));
