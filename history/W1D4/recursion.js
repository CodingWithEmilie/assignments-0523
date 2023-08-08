//Print only items (emojis) in the console. Not the arrays.

const printItems = function (array) {};

const array = ["😎", "💩", "🤗", "😼", "😂"];
printItems(array);

const array2 = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array2);

const array3 = [
  "😎",
  [
    ["💩", ["🤗"]],
    [[["😼"]], "😂"],
  ],
];
printItems(array3);