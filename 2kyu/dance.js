// https://www.codewars.com/kata/58f58dc3663082a4ba000033/train/javascript

function dance(raw) {
  const init = raw
    .split('\n')
    .map((row, i) =>
      row.split('').map((cell, j) => ({ row: i, col: j, value: cell, isTouched: false }))
    );

  const starts = init.flat().filter((value) => value.value === 'S');
}

dance('↖→↓←↗\n↑←↓→↓\n↑→S←↓\n↑←↓→↓\n↙→↑←↘');
