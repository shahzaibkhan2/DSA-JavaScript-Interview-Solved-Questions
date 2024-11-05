const findMedian = (arr) => {
  arr.sort((a, b) => a - b);

  let arrLength = arr.length;
  let median = Math.floor(arrLength / 2);

  if (arrLength % 2 === 0) {
    return (arr[median] + arr[median - 1]) / 2;
  } else {
    return arr[median];
  }
};

console.log(findMedian([5, 6, 9, 3, 1, 7]));
console.log(findMedian([5, 3, 9, 1]));
