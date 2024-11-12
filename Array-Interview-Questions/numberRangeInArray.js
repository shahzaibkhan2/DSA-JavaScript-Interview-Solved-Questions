const numberRangeInArray = (start, end) => {
  let arr = [];
  while (start <= end) {
    arr.push(start);
    start++;
  }

  return arr;
};

console.log(numberRangeInArray(3, 8));
console.log(numberRangeInArray(0, 3));
console.log(numberRangeInArray(-2, 9));
