const findDaysInDates = (date1, date2) => {
  let dateFormat1 = new Date(date1);
  let dateFormat2 = new Date(date2);

  let days = Math.abs(dateFormat1 - dateFormat2);

  return days / (24 * 60 * 60 * 1000);
};

const result1 = findDaysInDates("2024-2-19", "2024-5-3");
const result2 = findDaysInDates("2024-7-5", "2024-5-8");
const result3 = findDaysInDates("2024-6-5", "2024-7-3");
console.log(result1);
console.log(result2);
console.log(result3);
