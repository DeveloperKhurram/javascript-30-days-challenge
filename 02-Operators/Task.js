console.log("---------Task 01: Arithematic Operations Script---------");
let numOne = 11;
let numTwo = 3;

const sum = `Sum: ${numOne} + ${numTwo} = ${numOne + numTwo}`;
const difference = `Difference: ${numOne} - ${numTwo} = ${numOne - numTwo}`;
const product = `Product: ${numOne} × ${numTwo} = ${numOne * numTwo}`;

const division = `Dividend: ${numOne} ÷ Divisor: ${numTwo} =\nResult: ${(
  numOne / numTwo
).toFixed(2)} || Quotient: ${Math.floor(numOne / numTwo)} || Remainder: ${
  numOne % numTwo
}`;

console.log(`${sum}\n${difference}\n${product}\n${division}`);

console.log("---------Task 02: Assignment Operations Script---------");

let number = 7;
console.log(number);
number += 3;
console.log(number);
number -= 4;
console.log(number);

console.log("---------Task 03: Comparison Logical Operators Script---------");
const mountEverest = 29032; // Mount Everest height in feet
const k2 = 28251; // K2 height in feet

if (mountEverest > k2) {
  console.log(`Mount Everest's height is more than K2`);
} else if (mountEverest < k2) {
  console.log(`Mount Everest's height is less than K2`);
}

const objOne = { country: "Pakistan", language: "Urdu" };
const objTwo = { country: "Pakistan", language: "Urdu" };

if (objOne == objTwo) {
  console.log(`objOne & objTwo are equal`);
} else {
  console.log(`objects can not be same even if they have same values`);
}

const weekDays = 7;
const daysInWeek = "7";

if (weekDays == daysInWeek) {
  console.log(
    `== operator does loose checking and can not detect if the type is different`
  );
} else {
  console.log(`weekDays and daysInWeek are two different variables`);
}

if (weekDays === daysInWeek) {
  console.log(`weekDays & daysInWeek are equal in value and type`);
} else {
  console.log(`weekDays & daysInWeek are different in value and type`);
}

if (weekDays && daysInWeek === 7) {
  console.log(`both variable have same type`);
} else {
  console.log(`both variables are different`);
}

const aceCard = 1;
const heartCard = "King";

if (aceCard === 1 || heartCard === 1) {
  console.log(`aceCard or heartCard is = 1`);
} else {
  console.log(`Both have different value`);
}

if (aceCard !== heartCard) {
  console.log(`aceCard is a number card`);
} else {
  console.log(`aceCard is a faceCard`);
}

console.log("---------Task 04: Ternary Operator Script---------");

const age = 45;

const licence =
  age > 0 && age < 18
    ? `Not eligible for driving`
    : age >= 18 && age <= 45
    ? `eligible for driving`
    : age > 45 && age <= 70
    ? `You can not driver alone`
    : `ineligible age entered`;

console.log(licence);
