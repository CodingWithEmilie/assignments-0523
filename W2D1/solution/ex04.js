/*In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Input

Expected Output


Instruction
Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
*/

const instructorWithLongestName = function (instructors) {
  // Put your solution here
  // initial value for longest name
  let longest = 0;
  // loop through each instructor
  instructors.forEach((element, index) => {
    // compare the length of name
    if (element.name.length > instructors[longest].length) {
      // if longer, replace instructor
      longest = index;
    }
  });
  return instructors[longest];
};

console.log(
  instructorWithLongestName([
    { name: "Jeremiah", course: "Web" },
    { name: "Samuel", course: "Mobile" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
); //{name: "Jeremiah", course: "Web"}

console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "Mobile" },
    { name: "Domascus", course: "Web" },
  ])
); //{name: "Domascus", course: "Web"}

module.exports = instructorWithLongestName;
