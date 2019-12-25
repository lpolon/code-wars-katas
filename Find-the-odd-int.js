const arr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

const findOdd = (A) => {
  const frequencyObj = A.reduce((allNumbers, number, i) => {
    if (number in allNumbers) {
      allNumbers[number]++;
    } else {
      allNumbers[number] = 1;
    }
    return allNumbers;
  }, {});
  return parseInt(
    Object.entries(frequencyObj).filter((e) => {
      return e[1] === 1 || e[1] % 2 === 1
    })[0][0],
    10
  );
};

console.log(findOdd(arr));
