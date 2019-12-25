/* 
i understand this is an implementation of kadene's algorithm.
I tried to understand it as well as possible reading wiki and through this video:
https://www.youtube.com/watch?v=86CQq3pKSUw

https://stackoverflow.com/questions/32367032/kadanes-algorithm-explained
*/

const maxSequence = (arr) => {
  if (arr.length === 0) return 0
  // i don't understand why i have to initialize it as 0 instead of arr[0]
    let maxCurrent = 0;
    let maxGlobal = 0;

  arr.forEach((e, i) => {
    // what is the maximum subarray ending at an index?
    maxCurrent = Math.max((maxCurrent + e), e)
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent
    }
  })
  if (maxGlobal === -1) return 0
return maxGlobal;
};