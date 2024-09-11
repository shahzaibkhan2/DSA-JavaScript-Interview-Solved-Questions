let firstOccurance = -1;
let lastOccurance = -1;

const findFirstLastOccurances = (str, index, elementToFindOccurances) => {
  if (index === str.length) {
    console.log(
      `First occurance of ${elementToFindOccurances} is ${firstOccurance} and second occurance of ${elementToFindOccurances} is ${lastOccurance}`
    );
    return;
  }

  let currentOccurance = str.charAt(index);
  if (currentOccurance === elementToFindOccurances) {
    if (firstOccurance === -1) {
      firstOccurance = index;
    } else {
      lastOccurance = index;
    }
  }
  findFirstLastOccurances(str, index + 1, elementToFindOccurances);
};

findFirstLastOccurances("ebdfaeaeajklelfedel", 0, "e");
