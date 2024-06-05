const findLargestNum = (array) => {
  let largest = array[0];

  if (array.length === 1) {
    console.log("Largest Number is : ", largest);
  } else {
    for (let i = 0; i < array.length; i++) {
      if (largest < array[i]) {
        largest = array[i];
      }
    }
  }

  return `Largest Number is : ${largest}`;
};

const result = findLargestNum([2343434, 33, 22, 33, 342, 123, 2235, 10000, 1]);
console.log(result);
