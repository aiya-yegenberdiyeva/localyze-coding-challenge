const whitespaceCharacters = [' ', '  ',
  '\b', '\t', '\n', '\v', '\f', '\r', `\"`, `\'`, `\\`,
  '\u0008', '\u0009', '\u000A', '\u000B', '\u000C',
'\u000D', '\u0020','\u0022', '\u0027', '\u005C',
'\u00A0', '\u2028', '\u2029', '\uFEFF'];

function lastWordLength(str) {
  let wordLength = 0;
  let wordStarted = false;
  
  for (let i = str.length - 1; i >= 0; i--) {
    if (whitespaceCharacters.some(char => str[i] == char)) {
      if (wordStarted) {
        return wordLength;
      } else {
        continue;
      }
    } else {
      wordStarted = true;
      wordLength++;
    }
  }

  return wordLength;
}

console.log(lastWordLength("Hello World"));
console.log(lastWordLength(" fly me   to   the moon   "));
console.log(lastWordLength("luffy is still joyboy"));