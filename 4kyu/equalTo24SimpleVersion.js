// https://www.codewars.com/kata/574be65a974b95eaf40008da/train/javascript
// 07.07.2023

const S = ['+', '-', '*', '/'];

const addBrackets = (i, arr) => {
  if (i === 1) {
    // (a+b)+c+d
    arr.splice(3, 0, ')');
    arr.unshift('(');
    return arr;
  }
  if (i === 2) {
    // a+(b+c)+d
    arr.splice(5, 0, ')');
    arr.splice(2, 0, '(');
    return arr;
  }
  if (i === 3) {
    // a+b+(c+d)
    arr.splice(4, 0, '(');
    arr.push(')');
    return arr;
  }
  if (i === 4) {
    // (a+b+c)+d
    arr.splice(5, 0, ')');
    arr.unshift('(');
    return arr;
  }
  if (i === 5) {
    // a+(b+c+d)
    arr.splice(2, 0, '(');
    arr.push(')');
    return arr;
  }
  if (i === 6) {
    // (a+b)+(c+d)
    arr.splice(4, 0, '(');
    arr.splice(3, 0, ')');
    arr.unshift('(');
    arr.push(')');
    return arr;
  }
  if (i === 7) {
    // ((a+b)+c)+d
    arr.splice(5, 0, ')');
    arr.splice(3, 0, ')');
    arr.unshift('((');
    return arr;
  }
  if (i === 8) {
    // (a+(b+c))+d
    arr.splice(5, 0, '))');
    arr.splice(2, 0, '(');
    arr.unshift('(');
    return arr;
  }
  if (i === 9) {
    // a+(b+(c+d))
    arr.splice(4, 0, '(');
    arr.splice(2, 0, '(');
    arr.push('))');
    return arr;
  }
  if (i === 10) {
    // a+((b+c)+d)
    arr.splice(5, 0, ')');
    arr.splice(2, 0, '((');
    arr.push(')');
    return arr;
  }

  return arr; // a+b+c+d
};

// console.log(addBrackets(10, [1, '+', 2, '+', 3, '+', 4]).join(''));

function equalTo24(a, b, c, d) {
  let result = '';
  const amountOfSigns = S.length;

  for (let q = 0; q < 11; q++) {
    for (let x = 0; x < amountOfSigns; x++) {
      for (let y = 0; y < amountOfSigns; y++) {
        for (let z = 0; z < amountOfSigns; z++) {
          if (result) break;

          const instance = [a, S[x], b, S[y], c, S[z], d];

          const str = addBrackets(q, instance).join('');

          if (eval(str) === 24) {
            result = str;
          }
        }
      }
    }
  }

  return result || "It's not possible!";
}

console.log(equalTo24(1, 2, 3, 4));
