// Dot in Center
// . . . . .
// . . . . .
// . . X . .
// . . . . .
// . . . . .

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
// X . . . X
// . X . X .
// . . X . .
// . X . X .
// X . . . X

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
// X . . X
// X . . X
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

// Chess board
// . X . X
// X . X .
// . X . X
// X . X .

// const len = 8;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if ((!(i % 2) && j % 2) || (i % 2 && !(j % 2))) {
//       arr.push('X');
//     } else {
//       arr.push('.');
//     }
//   }
//   console.log(arr.join(' '));
// }

// Square with cross
// X X X X X X X
// X X . . . X X
// X . X . X . X
// X . . X . . X
// X . X . X . X
// X X . . . X X
// X X X X X X X

// const len = 7;
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

// Narrow Christmas tree
// . . . . X . . . .
// . . . X X X . . .
// . . X X X X X . .
// . . . . X . . . .
// . . . X X X . . .
// . . X X X X X . .
// . . . . X . . . .
// . . . X X X . . .
// . . X X X X X . .

// const len = 9;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (j >= Math.floor(len / 2) - (i % 3) && j < Math.ceil(len / 2) + (i % 3)) {
//       arr.push('X');
//     } else {
//       arr.push('.');
//     }
//   }
//   console.log(arr.join(' '));
// }

// Empty rhombus
// . . X . .
// . X . X .
// X . . . X
// . X . X .
// . . X . .

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

// Rhombus odd
// . . X . .
// . X X X .
// X X X X X
// . X X X .
// . . X . .

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
// . . X X . .
// . X X X X .
// X X X X X X
// X X X X X X
// . X X X X .
// . . X X . .

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

// Rhombus in rhombus
// . . . X . . .
// . . X . X . .
// . X . X . X .
// X . X . X . X
// . X . X . X .
// . . X . X . .
// . . . X . . .

// const len = 15;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (len / 2 > i) {
//       if (j >= Math.floor(len / 2) - i && j < Math.ceil(len / 2) + i) {
//         if ((!(i % 2) && j % 2) || (i % 2 && !(j % 2))) {
//           arr.push('X');
//         } else {
//           arr.push('.');
//         }
//       } else {
//         arr.push('.');
//       }
//     } else {
//       if (j >= i - Math.floor(len / 2) && j < len - i - 1 + Math.ceil(len / 2)) {
//         if ((!(i % 2) && j % 2) || (i % 2 && !(j % 2))) {
//           arr.push('X');
//         } else {
//           arr.push('.');
//         }
//       } else {
//         arr.push('.');
//       }
//     }
//   }
//   console.log(arr.join(' '));
// }

// 2 Up arrows
// . . X . .
// . X X X .
// X X X X X
// . . X . .
// . X X X .
// X X X X X

// const len = 9;
// for (let i = 0; i < len + 1; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (
//       Math.floor(len / 2) - (i % ((len + 1) / 2)) <= j &&
//       Math.ceil(len / 2) + (i % ((len + 1) / 2)) > j
//     ) {
//       arr.push('X');
//     } else {
//       arr.push('.');
//     }
//   }
//   console.log(arr.join(' '));
// }

// 2 Down arrows
// X X X X X
// . X X X .
// . . X . .
// X X X X X
// . X X X .
// . . X . .

// const len = 9;
// for (let i = 0; i < len + 1; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (Math.ceil(len / 2) >= i + 1) {
//       if (i <= j && len - i - 1 >= j) {
//         arr.push('X');
//       } else {
//         arr.push('.');
//       }
//     } else {
//       if (i - Math.ceil(len / 2) <= j && len - i - 1 + Math.ceil(len / 2) >= j) {
//         arr.push('X');
//       } else {
//         arr.push('.');
//       }
//     }
//   }
//   console.log(arr.join(' '));
// }

// Arrows in center
// X . . . X
// X X . X X
// X X X X X
// X X . X X
// X . . . X

// const len = 9;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     if (len / 2 > i) {
//       if (j <= i || j >= len - i - 1) {
//         arr.push('X');
//       } else {
//         arr.push('.');
//       }
//     } else {
//       if (j <= len - i - 1 || j >= i) {
//         arr.push('X');
//       } else {
//         arr.push('.');
//       }
//     }
//   }
//   console.log(arr.join(' '));
// }

// Arrows right
// X . . X . .
// X X . X X .
// X X X X X X
// X X . X X .
// X . . X . .

// const len = 9;
// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len + 1; j++) {
//     if (len / 2 > i) {
//       if (j <= i || (j >= Math.ceil(len / 2) && j <= Math.ceil(len / 2) + i)) {
//         arr.push('X');
//       } else {
//         arr.push('.');
//       }
//     } else {
//       if (j <= len - i - 1 || (j >= Math.ceil(len / 2) && j < Math.ceil(len / 2) + (len % i))) {
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
// X . . . . . X
// X . X X X . X
// X . X . X . X
// X . X X X . X
// X . . . . . X
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

// Christmas tree
// . . . . X . . . .
// . . . X X X . . .
// . . X X X X X . .
// . . . X X X . . .
// . . X X X X X . .
// . X X X X X X X .
// . . X X X X X . .
// . X X X X X X X .
// X X X X X X X X X

// const len = 15;
// const getOffset = (num, index, multiple) =>
//   num < multiple ? index : getOffset(num, index + 1, multiple + 3);

// for (let i = 0; i < len; i++) {
//   const arr = [];
//   for (let j = 0; j < len; j++) {
//     const step = 3;
//     const offset = getOffset(i, 0, step);
//     if (
//       j >= Math.floor(len / 2) - ((i % step) + offset) &&
//       j < Math.ceil(len / 2) + ((i % step) + offset)
//     ) {
//       arr.push('X');
//     } else {
//       arr.push('.');
//     }
//   }
//   console.log(arr.join(' '));
// }
