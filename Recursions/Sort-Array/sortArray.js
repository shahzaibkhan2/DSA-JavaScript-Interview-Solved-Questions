// LINEAR TIME COMPLEXITY
// SORT ARRAY WITHOUT USING BUILT IN JAVASCRIPT FUNCTIONS

let tempArray = [1, 2, 5, 4, 3];
let firstIndex = 0;
let secondIndex = 1;
let newArray = [];

const isSorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};

const sortArray = (arr) => {
  if (isSorted(arr)) {
    newArray = arr;
    return;
  } else if (arr[firstIndex] < arr[secondIndex]) {
    firstIndex++;
    secondIndex++;
    sortArray(arr);
  } else {
    [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
    firstIndex = 0;
    secondIndex = 1;
    sortArray(arr);
  }
};

sortArray(tempArray);
console.log(newArray);
