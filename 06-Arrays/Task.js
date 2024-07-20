console.log("---------Activity 01: Array Creation & Access---------");

const arabCountries = [
  "Egypt",
  "Lebnon",
  "Iraq",
  "Dubai",
  "Saudia Arabia",
  "Kuwait",
];

console.log(arabCountries);
console.log("////////");
console.log(`List of Arab Countries \n${arabCountries}`);
console.log("////////");
console.log(
  `Country at index 0 = ${arabCountries[0]}\nCountry at Last index = ${
    arabCountries[arabCountries.length - 1]
  }`
);

console.log("---------Activity 02: Array Methods (Basic) ---------");

arabCountries.push("Syria");
console.log(arabCountries);
arabCountries.pop();
console.log(arabCountries);
arabCountries.shift();
console.log(arabCountries);
arabCountries.unshift("Qatar");
console.log(arabCountries);

console.log("---------Activity 03: Array Methods (Intermediate)---------");

const playersScoreList = Array.from(
  new Set(
    Array.from({ length: 10 }, () => Math.floor(Math.random() * (91 - 13 + 1)))
  )
);
console.log(playersScoreList);
const arrayDoubled = playersScoreList.map((score) => score * 2);
console.log(arrayDoubled);
const arrayFiltered = playersScoreList.filter((score) => score % 2 === 0);
console.log(arrayFiltered);
const arrayReduced = playersScoreList.reduce((acc, num) => acc + num, 0);
console.log(arrayReduced);

console.log("---------Activity 04: Array Iteration---------");

const ukCities = [
  "London",
  "Manchester",
  "Birmingham",
  "Liverpool",
  "Leeds",
  "Glasgow",
  "Edinburgh",
  "Bristol",
  "Sheffield",
  "Newcastle",
];

for (let i = 0; i < ukCities.length; i++) {
  console.log(`${i+1}: ${ukCities[i]}`);
}
console.log('/////');
ukCities.forEach(city => {
    console.log(city);
});

console.log("---------Activity 05: Two-dimensional Arrays---------");

const regularMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const irregularMatrix = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

console.log(regularMatrix);
console.log(irregularMatrix);

console.log(regularMatrix[2][1]);
console.log(irregularMatrix[1][1]);