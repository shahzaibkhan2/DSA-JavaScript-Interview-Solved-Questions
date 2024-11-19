const generateStars = (arr) => {
  const mappedArray = arr.map((item, index) => {
    let stars = "";
    let number = 0;
    while (number < item) {
      stars += "*";
      number++;
    }
    return stars;
  });
  console.log(mappedArray.join("\n"));
};

const result = generateStars([3, 2, 6, 8, 1]);
console.log(result);
