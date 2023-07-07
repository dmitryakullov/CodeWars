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

function equalTo24(...numbers) {
  console.log(...numbers);
  let result = '';
  const amountOfSigns = S.length;
  let counter = 0;

  function createInstance(a, b, c, d) {
    for (let q = 0; q < 11; q++) {
      for (let x = 0; x < amountOfSigns; x++) {
        for (let y = 0; y < amountOfSigns; y++) {
          for (let z = 0; z < amountOfSigns; z++) {
            if (result) break;

            const instance = [a, S[x], b, S[y], c, S[z], d];

            const str = addBrackets(q, instance).join('');
            counter++;
            if (eval(str) === 24) {
              result = str;
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    createInstance(numbers[0], numbers[1], numbers[2], numbers[3]);
  }

  console.log({ counter });
  return result || "It's not possible!";
}

console.log(equalTo24(12, 13, 13, 6));

//13 13 6 12
//12 6 13 13
