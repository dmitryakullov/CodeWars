function difficultPercentDaily(data) {
  const { initialAmount, dailyPercentage, sumUp, days, months, years, addEachMouth } = data;

  let totalDays;
  let amount = initialAmount;
  let temporaryAmount = 0;

  if (years) totalDays = years * 365;
  else if (months) totalDays = months * 30;
  else totalDays = days;

  for (let i = 1; i <= totalDays; i++) {
    if (addEachMouth && i % 30 === 0) {
      amount += addEachMouth;
    }

    temporaryAmount += amount * (dailyPercentage / 100);

    if (i % sumUp === 0) {
      amount += temporaryAmount;
      temporaryAmount = 0;
    }
  }

  const resultAmount = amount + temporaryAmount;

  return `Total amount: ${Math.round(resultAmount)}`;
}

console.log(
  difficultPercentDaily({
    initialAmount: 1000,
    dailyPercentage: 1,
    sumUp: 3,
    months: 1,
    addEachMouth: 0,
  })
);
