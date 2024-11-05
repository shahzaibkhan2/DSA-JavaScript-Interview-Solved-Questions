const findMode = (arr) => {
  let mode = 0;
  let maxNum = 0;
  let count = {};

  for (let value of arr) {
    count[value] = (count[value] || 0) + 1;
    if (count[value] > maxNum) {
      maxNum = count[value];
      mode = value;
    }
  }

  return mode;
};

console.log(findMode([1, 3, 4, 5, 5, 5, 6, 7, 8, 8]));
