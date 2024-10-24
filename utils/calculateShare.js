const calculateShare = (amounts = [], sum) => {
  const initialSum = amounts.reduce((acc, curr) => acc + curr, 0);

  return amounts.reduce((acc, curr) => {
    const fullShare = sum * (curr / initialSum);
    const clearShare = fullShare - curr;

    return [
      ...acc,
      {
        all: fullShare.toFixed(),
        clear: clearShare.toFixed(),
        initial: curr,
      },
    ];
  }, []);
};

console.log(calculateShare([1000, 2000, 4000], 12345));
