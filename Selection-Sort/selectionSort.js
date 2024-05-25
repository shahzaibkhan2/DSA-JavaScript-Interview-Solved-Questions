// SELECTION SORT ALGORITHM

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let tempVar = arr[i];
      arr[i] = arr[min];
      arr[min] = tempVar;
    }
  }

  return arr;
};

const result = selectionSort([11, 21, 12, 2, 1, 4, 3, 6, 5]);
console.log(result);
