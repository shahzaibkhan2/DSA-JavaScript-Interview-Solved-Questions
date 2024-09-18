const counterMap = new Array(26).fill(false);
const removeDuplicates = (str, index, emptyStr) => {
  if (index === str.length) {
    console.log(emptyStr);
    return;
  }

  let currentCharacter = str.charAt(index);
  let mapIndex = currentCharacter.charCodeAt(0) - "a".charCodeAt(0);

  if (counterMap[mapIndex]) {
    removeDuplicates(str, index + 1, emptyStr);
  } else {
    emptyStr += currentCharacter;
    counterMap[mapIndex] = true;
    removeDuplicates(str, index + 1, emptyStr);
  }
};

removeDuplicates("ggaammee", 0, "");
