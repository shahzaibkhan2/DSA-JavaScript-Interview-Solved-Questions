const generateStars = (arr) => {
  const mappedArray = arr.map((item) => {
    let stars = "";
    let number = 0;
    while (number < item) {
      stars += "*";
      number++;
    }
    return stars;
  });
  return mappedArray.join("\n");
};

const result = generateStars([3, 2, 6, 8, 1]);
console.log(result);
