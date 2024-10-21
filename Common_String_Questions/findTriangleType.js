// Find the sides of a triangle whether it is an isosceles, equilateral or scalene.
const findTriangleType = (sideOne, sideTwo, sideThree) => {
  if (sideOne === sideTwo && sideTwo === sideThree)
    return "This triangle is Equilateral.";

  if (sideOne === sideTwo || sideTwo === sideThree || sideThree === sideOne)
    return "This triangle is Isosceles.";

  return "This triangle is Scalene.";
};

const exampleOne = findTriangleType(1, 2, 1);
const exampleTwo = findTriangleType(1, 2, 3);
const exampleThree = findTriangleType(1, 1, 1);

console.log(exampleOne);
console.log(exampleTwo);
console.log(exampleThree);
