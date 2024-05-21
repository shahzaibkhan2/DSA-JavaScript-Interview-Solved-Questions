const findIndex = (arr, num) => {
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    let midIndex = Math.floor((minIndex + maxIndex) / 2);
    if (arr[midIndex] > num) {
      maxIndex = midIndex - 1;
    } else if (arr[midIndex] < num) {
      minIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }

  return -1;
};

const result = findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
console.log(result);
