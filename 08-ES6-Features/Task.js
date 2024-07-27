// function tag(strings, ...values) {
//     console.log(strings);  // ["Hello, ", " is ", "!"]
//     console.log(values);   // ["Alice", "awesome"]
//     return "Processed string";
// }

// const name = 'Alice';
// const descriptor = 'awesome';

// const result = tag`Hello, ${name} is ${descriptor}!`; // "Processed string"

// function format(strings, ...values) {
//     return strings.reduce((result2, string, i) => {
//         return `${result2}${string}${values[i] ? values[i].toUpperCase() : ''}`;
//     }, '');
// }

// const name2 = 'Alice';
// const descriptor2 = 'wonderful';

// const result2 = format`Hello, ${name2} is ${descriptor2}!`; // "Hello, ALICE is WONDERFUL!"
// console.log(result2);

console.log("---------Activity 01: Template Literals---------");
let personName = "Sheikh Abdullah";
let personAge = 25;

const templateLiteral = `My name is ${personName}. I'm ${personAge} years old`;

console.log(templateLiteral);

const multiLineString = `
I live in twin cities.
By profession I'm accountant.

But now I'm studying coding.
`;
const singleString =
  "I live in twin cities.\nBy profession I'm accountant.\n\nBut now I'm studying coding.";

console.log(multiLineString);
console.log("///////////");
console.log(singleString);

console.log("---------Activity 02: Destructuring ---------");

const numArr = [4, 7, 11, 19, 34, 99, 86];
const [firstNum, secondNum] = numArr;
console.log(firstNum);
console.log(secondNum);

const bookObj = {
  title: "Clean Code",
  author: "Robert C Martin",
  price: "950 INR",
  type: "Paperback",
  publishedDate: "25 September, 2017",
};

const { title, author } = bookObj;

console.log(`${bookObj.title} - written by: ${author}`);

console.log("---------Activity 03: Spread and Rest Operators ---------");

const fruits = ["apple", "mango", "banana"];
console.log(fruits);
const moreFruits = [...fruits, "kivi", "guava", "pineapple"];
console.log(moreFruits);

const totalCost = (...cost) => {
  const result = cost.reduce((sum, num) => sum + num, 0);
  return console.log(result);
};

totalCost(2, 43, 5, 67);

console.log("---------Activity 04: Default Parameters ---------");

const product = (num1, num2 = 1) => {
  return console.log(num1 * num2);
};

product(25);
product(25, 25);

console.log("---------Activity 05: Enhanced Object Literals ---------");

const name = "Mark Anderson";
let age = 25;
const favoriteColor = "dynamicColor";
let color = "brown";

const personDetail = {
  name,
  age,
  intro() {
    return console.log(
      `${this.name} here, a ${this.age} years old ${this.profession}.`
    );
  },
  [favoriteColor]: color,
  profession: "frontend developer",
};

personDetail.intro();
