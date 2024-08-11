// Dot
// 0 0 0
// 0 X 0
// 0 0 0

// const len = 5;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     const middle = Math.floor(len / 2);
//     if (j === middle && i === middle) {
//       arr.push('X');
//     } else {
//       arr.push('.');
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

// Square
// X X X X
// X 0 0 X
// X 0 0 X
// X X X X

// const len = 6;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (i === 0 || i === len - 1) {
//       arr.push('X');
//     } else if (j === 0 || j === len - 1) {
//       arr.push('X');
//     } else {
//       arr.push('.');
//     }
//   }
//   console.log(arr.join(' '));
// }

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

// Square with cross
// X X X X X
// X X 0 X X
// X 0 X 0 X
// X X 0 X X
// X X X X X

// const len = 10;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (i === 0 || i === len - 1 || j === 0 || j === len - 1) {
//       arr.push('X');
//     } else if (i === j || j === len - i - 1) {
//       arr.push('X');
//     } else {
//       arr.push('.');
//     }
//   }
//   console.log(arr.join(' '));
// }

// Rhombus odd
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

// Rhombus even
// 0 0 X X 0 0
// 0 X X X X 0
// X X X X X X
// X X X X X X
// 0 X X X X 0
// 0 0 X X 0 0

// const len = 8;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (len / 2 - 1 >= i) {
//       if (j >= len / 2 - i - 1 && j <= len / 2 + i) {
//         arr.push('X');
//       } else {
//         arr.push('.');
//       }
//     } else {
//       if (j >= i - len / 2 && j <= len / 2 + (len % (i + 1))) {
//         arr.push('X');
//       } else {
//         arr.push('.');
//       }
//     }
//   }
//   console.log(arr.join(' '));
// }

// 2 arrows
// 0 0 X 0 0
// 0 X X X 0
// X X X X X
// 0 0 X 0 0
// 0 X X X 0
// X X X X X

// const len = 9;
// for (let i = 0; i < len + 1; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (Math.ceil(len / 2) >= i + 1) {
//       if (Math.floor(len / 2) - i <= j && Math.ceil(len / 2) + i > j) {
//         arr.push('X');
//       } else {
//         arr.push('.');
//       }
//     } else {
//       if (Math.floor(len / 2) - (i - len / 2) <= j && Math.ceil(len / 2) + (i - len / 2 - 1) > j) {
//         arr.push('X');
//       } else {
//         arr.push('.');
//       }
//     }
//   }
//   console.log(arr.join(' '));
// }

// Square in square
// X X X X X X X
// X 0 0 0 0 0 X
// X 0 X X X 0 X
// X 0 X 0 X 0 X
// X 0 X X X 0 X
// X 0 0 0 0 0 X
// X X X X X X X

// const len = 15;
// const isOdd = !!(len % 2);
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (isOdd ? len / 2 > i : len / 2 - 1 >= i) {
//       if (!(i % 2) && j >= 0 + i && j < len - i) {
//         arr.push('X');
//       } else if (isOdd ? len / 2 > j : len / 2 - 1 >= j) {
//         if (!(j % 2) && i >= 0 + j) {
//           arr.push('X');
//         } else {
//           arr.push('.');
//         }
//       } else {
//         if ((isOdd ? !(j % 2) : j % 2) && i >= len - j - 1) {
//           arr.push('X');
//         } else {
//           arr.push('.');
//         }
//       }
//     } else {
//       if ((isOdd ? !(i % 2) : i % 2) && j >= len - i - 1 && j < len - (len % (isOdd ? i : i + 1))) {
//         arr.push('X');
//       } else if (isOdd ? len / 2 > j : len / 2 - 1 >= j) {
//         if (!(j % 2) && i < len - j) {
//           arr.push('X');
//         } else {
//           arr.push('.');
//         }
//       } else {
//         if ((isOdd ? !(j % 2) : j % 2) && i < len - (isOdd ? (len % j) - 1 : len % (j + 1))) {
//           arr.push('X');
//         } else {
//           arr.push('.');
//         }
//       }
//     }
//   }
//   console.log(arr.join(' '));
// }

// Empty rhombus
// 0 0 X 0 0
// 0 X 0 X 0
// X 0 0 0 X
// 0 X 0 X 0
// 0 0 X 0 0

// const len = 9;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (i + Math.floor(len / 2) - (len / 2 > i ? 0 : len - 1) === j) {
//       arr.push('X');
//     } else if (len - (Math.floor(len / 2) + i + 1) + (len / 2 > i ? 0 : len - 1) === j) {
//       arr.push('X');
//     } else {
//       arr.push('.');
//     }
//   }
//   console.log(arr.join(' '));
// }

// Christmas tree
// 0 0 0 0 X 0 0 0 0
// 0 0 0 X X X 0 0 0
// 0 0 X X X X X 0 0
// 0 0 0 X X X 0 0 0
// 0 0 X X X X X 0 0
// 0 X X X X X X X 0
// 0 0 X X X X X 0 0
// 0 X X X X X X X 0
// X X X X X X X X X

// const len = 9;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {}
//   console.log(arr.join(' '));
// }
