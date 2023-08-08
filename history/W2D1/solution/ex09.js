/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  // Your code here
  // split word into array, using space as separator
  const words = input.split(" ");
  // loop through every word
  const camelCaseWords = words.map((word, index) => {
    // if first word, return as it is
    if (index === 0) {
      return word.toLowerCase();
    }
    // modify first letter to be uppercase and concat with rest of word
    return word[0].toUpperCase() + word.slice(1);
  });
  // convert array into string and return
  return camelCaseWords.join("");
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("Loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
