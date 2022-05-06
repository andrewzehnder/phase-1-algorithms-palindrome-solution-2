function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}

/* 
Create a function with the inputted word.
Check the length of the word so you can compare the first and the last letters. Knowing where to stop the comparison. 
Compare the first letter and last letter to see if they match.
Loop through this for every letter.
If it's an odd length, no need to compare the middle letter.
If every letter matches, return true.
If one set of comparisons fail, return false.
*/

/*
  The function needs to take in a word and needs to output whether the word is a palindrome. 
  If not, it needs to output false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
