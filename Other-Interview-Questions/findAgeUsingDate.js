const findAgeUsingDate = (birthDate) => {
  let currentDate = new Date();
  let birthDateFromDate = new Date(birthDate);

  let currentYear = currentDate.getFullYear();
  let birthYear = birthDateFromDate.getFullYear();

  let age = currentYear - birthYear;
  let monthDiff = currentDate.getMonth() - birthDateFromDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate < birthDateFromDate.getDate())
  )
    age--;

  return age;
};

const result = findAgeUsingDate("1997-9-25");
console.log(result);
