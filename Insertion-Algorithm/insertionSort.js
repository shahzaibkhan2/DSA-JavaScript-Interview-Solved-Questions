// INSERTION

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let leftVal = i - 1;

    while (leftVal >= 0 && arr[leftVal] > current) {
      arr[leftVal + 1] = arr[leftVal];
      leftVal--;
    }
    arr[leftVal + 1] = current;
  }

  return arr;
};

const result = insertionSort([8, 2, 3, 1]);
console.log(result);
