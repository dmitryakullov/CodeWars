// chess board
// 0 X 0 X
// X 0 X 0
// 0 X 0 X
// X 0 X 0

// const len = 8;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (i % 2) {
//       j % 2 ? arr.push('.') : arr.push('X');
//     } else {
//       j % 2 ? arr.push('X') : arr.push('.');
//     }
//   }
//   console.log(arr.join(' '));
// }

// Rhombus
// 0 0 X 0 0
// 0 X X X 0
// X X X X X
// 0 X X X 0
// 0 0 X 0 0

// const len = 9;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (len / 2 > i) {
//       if (Math.floor(len / 2) - i <= j && Math.ceil(len / 2) + i > j) {
//         arr.push('X');
//       } else {
//         arr.push('.');
//       }
//     } else {
//       if (i - Math.floor(len / 2) <= j && Math.ceil(len / 2) + ((len % i) - 1) > j) {
//         arr.push('X');
//       } else {
//         arr.push('.');
//       }
//     }
//   }
//   console.log(arr.join(' '));
// }

// Cross
// X 0 0 0 X
// 0 X 0 X 0
// 0 0 X 0 0
// 0 X 0 X 0
// X 0 0 0 X

// const len = 7;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (i === j || j === len - (i + 1)) {
//       arr.push('X');
//     } else {
//       arr.push('.');
//     }
//   }
//   console.log(arr.join(' '));
// }
