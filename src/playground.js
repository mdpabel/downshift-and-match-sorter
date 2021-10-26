const { matchSorter } = require("match-sorter");

const list = ["hi", "hey", "hello", "sup", "yo"];

// console.log(matchSorter(list, "h"));

const objList = [
  { name: "Janice", color: "Green" },
  { name: "Fred", color: "Orange" },
  { name: "George", color: "Blue" },
  { name: "Jen", color: "Red" },
];

// console.log(matchSorter(objList, "j", { keys: ["name"] }));

const iceCreamYum = [
  { favoriteIceCream: ["mbnt", "chocolate"] },
  { favoriteIceCream: ["candy cane", "brownie"] },
  { favoriteIceCream: ["birthday cake", "rocky road", "strawberry"] },
];

// console.log(matchSorter(iceCreamYum, "e", { keys: ["favoriteIceCream"] }));

console.log(
  matchSorter(iceCreamYum, "b", {
    keys: [
      "favoriteIceCream",
      { minRanking: matchSorter.rankings.WORD_STARTS_WITH, key: "" },
    ],
  })
);
