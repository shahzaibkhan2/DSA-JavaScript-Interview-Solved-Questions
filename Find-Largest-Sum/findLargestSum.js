//  FIND THE LARGEST SUM IN THE GIVEN ARRAY.

const findLargestSum = (arr, num) => {
  if (num > arr) {
    console.log("Sorry ! Number is greater.");
  } else {
    let max = 0;
    for (let i = 0; i < arr.length - num + 1; i++) {
      let tempMax = 0;
      for (let j = 0; j < num; j++) {
        tempMax += arr[i + j];
      }
      if (tempMax > max) {
        max = tempMax;
      }
    }
    return max;
  }
};

const result = findLargestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(result);
