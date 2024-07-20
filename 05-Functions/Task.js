console.log(
  "---------Task 01: Function Declaration - to check even odd numbers---------"
);

// let number = 4
function EvenOdd(number = 5) {
  const result = number % 2;
  if (result === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}

EvenOdd(9248);

console.log("---------Task 02: Function Declaration - to get square ---------");

function GetSquare(number = 4) {
  const result = number * number;
  console.log(`The square of ${number} = ${result}`);
}

GetSquare(9);

console.log(
  "---------Task 03: Function Expression - to find the maximum of two numbers ---------"
);

const MaximumNumber = function (num1 = 7, num2 = 10) {
  const result = Math.max(num1, num2);
  if (result > num1) {
    console.log(`${num2} is greater than ${num1}`);
  } else {
    console.log(`${num1} is greater than ${num2}`);
  }
};

MaximumNumber(347, 735);

console.log(
  "---------Task 04: Function Expression - to concatenate strings ---------"
);

const ConcatStrings = function (str1 = "Welcome to", str2 = " Javascript.") {
  const result = str1 + str2;
  console.log(result);
};

ConcatStrings();

console.log("---------Task 05: Arrow Function - sum of numbers ---------");

//   let num1 = 7
//   let num2 = 5

const NumberSum = (num1, num2) => {
  const result = num1 + num2;
  console.log(`The sum of ${num1} + ${num2} = ${result}`);
};

NumberSum(23, 54);

console.log(
  "---------Task 06: Arrow Function - check a specific character ---------"
);

let str = "Javascript is a frontend language!";
const FindChar = (char) => {
  const result = str.includes(char);
  if (result) {
    console.log(`The expression:\n${str}\ncontains: ${char}`);
  } else {
    console.log(`The expression:\n${str}\ndoes not contains: ${char}`);
  }
};

FindChar("z");

console.log("---------Task 07: Function - to get product ---------");

const getProduct = (num1, num2 = 12) => {
  const result = num1 * num2;
  console.log(`${num1} * ${num2} = ${result}`);
};

getProduct(3);

console.log("---------Task 08: Function - display greeting message ---------");

function Greetings(name, age = 38) {
  console.log(
    `Hi, ${name}. Welcome to ChaiAurCode.\nNo matter if you're ${age}. Age is just a number.`
  );
}

Greetings("Khurram Shahzad");

console.log("---------Task 10 & 11: Higer Order Function---------");

// Simple function:
function GetSalary(numbere) {
  return numbere * 0.7;
}

console.log(
  `This is an example of simple function\nRs. ${GetSalary(100000).toFixed(
    2
  )}/- only`
);

setTimeout(() => {
  console.log(
    `setTimeout is an example of Higher order function\nRs. ${GetSalary(
      250000
    ).toFixed(2)}/- only`
  );
}, 2000);

const prices = [55, 78, 9.1, 350, 75];

const segmentedPrice = Math.floor(
  prices
    .filter((n) => n > 10)
    .filter((m) => m % 2 === 0)
    .map((o) => o / 100)
    .reduce((acc, num) => acc + num, 0)
);
console.log(segmentedPrice);

function createGreetings(greeting) {
  return function (name = "Stranger") {
    return `${greeting}, ${name}!`;
  };
}

const goodDay = createGreetings("Good Day");
console.log(goodDay());
const mister = goodDay("Sam");
console.log(mister);

const repeat = (func, times) => {
  for (let i = 0; i < times; i++) {
    func();
  }
};

const Mornings = () => console.log("Bonjour, Khurram");
repeat(Mornings, 3);

const getPercentage = (marksObtained, fullMarks, practicalMarks) =>
  fullMarks(marksObtained(practicalMarks));

const scoreGained = (score) => score + 60;
const scorePercentage = (totalScore) => ((totalScore / 1100) * 100).toFixed(2);

console.log(getPercentage(scoreGained, scorePercentage, 840));
