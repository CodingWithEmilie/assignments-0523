/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) {
  // Put your solution here
  let vowels = ["a", "e", "i", "o", "u"];
  let totalVowels = 0;
  const stringArr = data.split("");
  // console.log("stringArr", stringArr);
  stringArr.forEach((char) => {
    if (vowels.includes(char)) {
      totalVowels++;
    }
  });
  const filteredVowels = stringArr.filter(
    (char) =>
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
  );
  return filteredVowels.length;
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
