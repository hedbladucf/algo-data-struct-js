// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charsMap = {};
  let maxNum = 0;
  let maxChar = '';

  for (let char of str) {
    if (charsMap[char]) {
      charsMap[char]++;
    } else {
      charsMap[char] = 1;
    }
  }
  
  for (let char in charsMap) {
    if (charsMap[char] > maxNum) {
      maxNum = charsMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
