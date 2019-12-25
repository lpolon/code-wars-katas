const persistence = (num) => {
  const splitAndMultiply = (num) => {
    return (
      num
        .toString()
        .split('')
        // eslint-disable-next-line no-return-assign
        .reduce((acc, e) => (acc *= e))
    ).toString();
  };
  
  let persistenceCount = 0;
  let numberToCheck = num
  while (numberToCheck.toString().length !== 1) {
    numberToCheck = splitAndMultiply(numberToCheck)
    persistenceCount += 1
  }
  return persistenceCount;
};