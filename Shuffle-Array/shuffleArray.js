const shuffleArray = (arr) => {
  let totalValuesLength = arr.length;

  while (totalValuesLength > 0) {
    totalValuesLength--;

    let newIndex = Math.floor(Math.random() * totalValuesLength);
    let tempValue = arr[totalValuesLength];
    arr[totalValuesLength] = arr[newIndex];
    arr[newIndex] = tempValue;
  }

  return arr;
};

console.log(shuffleArray([1, 4, 5, 7, 8, 9, 0, 12, 33]));
