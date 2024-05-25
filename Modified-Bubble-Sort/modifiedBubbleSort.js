const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    let isSwapped;
    console.log(
      // Loop Hole in the bubble sort resolved and number of iterations are reduced
      `Number of iterations: ${i}`
    );
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }

  return arr;
};

const result = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
console.log(result);
