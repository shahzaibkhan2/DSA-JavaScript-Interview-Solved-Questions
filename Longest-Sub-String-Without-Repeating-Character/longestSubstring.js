// Find the longest Sub-string without repeating characters

// TECHNIQUE: Window Slider Technique

const longestSubstring = (str) => {
  let startPointer = 0;
  let endPointer = 0;

  let maxLength = 0;
  const uniqueChars = new Set();

  while (endPointer < str.length) {
    if (!uniqueChars.has(str[endPointer])) {
      uniqueChars.add(str[endPointer]);
      endPointer++;
      maxLength = Math.max(maxLength, uniqueChars.size);
    } else {
      uniqueChars.delete(str[startPointer]);
      startPointer++;
    }
  }

  return maxLength;
};

const result = longestSubstring("abcabcbb");
console.log(result);
