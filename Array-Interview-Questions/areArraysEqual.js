const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, i) => val === arr2[i]);
};

const example = areArraysEqual([1, 2, 3], [1, 2, 4]);
const example2 = areArraysEqual([1, 2, 3], [1, 2, 3]);
console.log(`Example One is ${example} & Example Two is ${example2}`);
