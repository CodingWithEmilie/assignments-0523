//Print only items (emojis) in the console. Not the arrays.

const printItems = function (array) {
  array.forEach((element) => {
    if (Array.isArray(element)) {
      //   console.log("calling recursion");
      printItems(element);
    } else {
      console.log("element", element);
    }
  });
};

const array = ["😎", "💩", "🤗", "😼", "😂"];
printItems(array);
console.log("--------------------------------------");

const array2 = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array2);
console.log("--------------------------------------");

const array3 = [
  "😎",
  [
    ["💩", ["🤗"]],
    [[["😼"]], "😂"],
  ],
];
printItems(array3);
