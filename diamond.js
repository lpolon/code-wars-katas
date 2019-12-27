// https://www.codewars.com/kata/5503013e34137eeeaa001648/solutions/javascript

const diamond = (n) => {
  const createDiamondLine = (n, currentOddInt) => {
    const diaString = '*'.repeat(currentOddInt);
    const numberOfSpaces = (n - currentOddInt) / 2; // line 1
    const spaceString = ' '.repeat(numberOfSpaces);
    const diaLine = ''.concat(spaceString, diaString);
    return diaLine;
  };
  if (n % 2 === 0 || n < 0) return null;
  const diamondArr = [];
  for (let i = n; i >= 1; i -= 2) {
    const diamondLine = createDiamondLine(n, i)
    if ( i === n) {
      diamondArr.push(diamondLine);
    } else {
      diamondArr.push(diamondLine);
      diamondArr.unshift(diamondLine);
    }
  }
  return diamondArr.join('\n');
}
console.log(
  diamond(31)
)
