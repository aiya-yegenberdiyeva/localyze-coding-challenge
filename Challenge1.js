function longestSequence(str) {
  if (str.length == 0) {
    return "";
  }
  
  let maxStart = 0, maxEnd = 0, lastMaxLength = 0;
  let currentStart = 0, currentEnd = 0, currentLength = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] == str[i-1]) {
      currentLength++;
      currentEnd++;
    } else {
      if (currentLength > lastMaxLength) {
        lastMaxLength = currentLength;
        maxStart = currentStart;
        maxEnd = currentEnd;
      }
      currentLength = 1;
      currentStart = i;
      currentEnd = i;
    }
  }

  return str.substring(maxStart, maxEnd + 1);
}

console.log(longestSequence("Pressuuuuuure"));
console.log(longestSequence("Pressuure"));
console.log(longestSequence("Boat"));
console.log(longestSequence("A hot  dog"));