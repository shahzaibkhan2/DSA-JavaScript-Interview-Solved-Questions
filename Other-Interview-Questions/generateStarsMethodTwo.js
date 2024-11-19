const generateStarsMethodTwo = (arr) => {
  return arr
    .map((item) => {
      return `${"*".repeat(item)}`;
    })
    .join("\n");
};

console.log(generateStarsMethodTwo([2, 3, 1, 5, 6]));
