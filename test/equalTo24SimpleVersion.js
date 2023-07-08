// https://www.codewars.com/kata/574be65a974b95eaf40008da/train/javascript
// 07.07.2023

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

const resultsARR = [];

function equalTo24(...n) {
  const S = ['+', '-', '*', '/'];
  const amountOfSigns = S.length;

  let result = '';

  const allSigns = [];

  for (let x = 0; x < amountOfSigns; x++) {
    for (let y = 0; y < amountOfSigns; y++) {
      for (let z = 0; z < amountOfSigns; z++) {
        allSigns.push([S[x], S[y], S[z]]);
      }
    }
  }

  function createInstance(a, b, c, d) {
    for (let q = 0; q < 11; q++) {
      for (let t = 0; t < allSigns.length; t++) {
        if (result) break;

        const k = allSigns[t];

        const instance = [a, k[0], b, k[1], c, k[2], d];

        const str = addBrackets(q, instance).join('');

        resultsARR.push(String(eval(str)));

        const evalRes = String(eval(str));
        if (evalRes === '24' || evalRes === '23.99999999999999') {
          result = str;
        }
      }
    }
  }

  const arr = [
    [n[0], n[1], n[2], n[3]],
    [n[0], n[1], n[3], n[2]],
    [n[0], n[3], n[1], n[2]],
    [n[0], n[3], n[2], n[1]],
    [n[0], n[2], n[1], n[3]],
    [n[0], n[2], n[3], n[1]],

    [n[3], n[0], n[2], n[1]],
    [n[3], n[0], n[1], n[2]],
    [n[3], n[1], n[0], n[2]],
    [n[3], n[1], n[2], n[0]],
    [n[3], n[2], n[1], n[0]],
    [n[3], n[2], n[0], n[1]],

    [n[1], n[0], n[2], n[3]],
    [n[1], n[0], n[3], n[2]],
    [n[1], n[3], n[0], n[2]],
    [n[1], n[3], n[2], n[0]],
    [n[1], n[2], n[0], n[3]],
    [n[1], n[2], n[3], n[0]],

    [n[2], n[0], n[3], n[1]],
    [n[2], n[0], n[1], n[3]],
    [n[2], n[1], n[0], n[3]],
    [n[2], n[1], n[3], n[0]],
    [n[2], n[3], n[1], n[0]],
    [n[2], n[3], n[0], n[1]],
  ];

  // const _arr = [
  //   [n[0], n[1], n[2], n[3]],
  //   [n[1], n[2], n[3], n[0]],
  //   [n[2], n[3], n[0], n[1]],
  //   [n[3], n[0], n[1], n[2]],
  // ];

  // const arr = [..._arr, ..._arr.reverse()];

  for (let i = 0; i < arr.length; i++) {
    if (result) break;

    createInstance(...arr[i]);
  }

  const data = Array.from(resultsARR).filter(
    (item) => item.startsWith('23.') || item.startsWith('24.') || item === '24'
  );

  console.log(data.length, data);

  return result || "It's not possible!";
}

// a=6,b=60,c=72,d=24
const perf1 = performance.now();
console.log(equalTo24(93, 89, 100, 88));
const perf2 = performance.now();
console.log({ performance2: perf2 - perf1 });

// a=13,b=9,c=7,d=12

// 8/(3-(8/3))

// a=6,b=6,c=1,d=8
// 6, 1, 6, 8 Done
//6/(1-(6/8))

//13 13 6 12
//12 6 13 13

//a=2,b=13,c=2,d=6  Example solution: "(2*(13+2))-6"
