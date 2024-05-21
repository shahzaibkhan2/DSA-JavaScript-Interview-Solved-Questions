const findUniqueNumber = (array) => {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    console.log("Array is empty");
  }
};

const result = findUniqueNumber([11, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 9]);
console.log(result);
