function numberRangeUsingRecursions(a, b, arr = []) {
  if (a <= b) {
    arr.push(a);
    return numberRangeUsingRecursions(a + 1, b, arr);
  }

  return arr;
}

console.log(numberRangeUsingRecursions(1, 6));
console.log(numberRangeUsingRecursions(0, 8));
console.log(numberRangeUsingRecursions(-1, 4));
