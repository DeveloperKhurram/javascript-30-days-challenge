console.log("---------Task 01: Number Check Script---------");

let daysOfTheWeek = 7;
let firstWholeNumber = 0;
let freezingTemprature = -4;

if (daysOfTheWeek >= 0) {
  console.log("daysOfTheWeek is positive number");
} else {
  console.log("daysOfTheWeek is negative number");
}

if (firstWholeNumber < 0) {
  console.log("firstWholeNumber is negative");
} else {
  console.log("firstWholeNumber is zero");
}

if (freezingTemprature > 0) {
  console.log(`freezingTemprature is positive`);
} else {
  console.log(`freezingTemprature is negative`);
}

console.log("---------Task 02: Eligible for voting---------");
const votingAge = 23;

if (votingAge >= 18) {
  console.log("The person is eligible for voting");
} else {
  console.log("The person is not eligible for voting");
}

console.log("---------Task 03: Find the largest number---------");

let numberOne = 97;
let numberTwo = 675;
let numberThree = 101;

if (numberOne > numberTwo) {
  if (numberOne > numberThree) {
    console.log("numberOne is greater");
  } else {
    console.log("numberThree is greater");
  }
} else {
  if (numberTwo > numberThree) {
    console.log("numberTwo is greater");
  } else {
    console.log("numberThree is greater");
  }
}

console.log("---------Task 04: Days of the week ---------");

let dayNumber = 5;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("You entered an invalid number");
}

console.log("---------Task 05: Grade Assigning ---------");

let obtainedMarks = 55;

switch (true) {
  case obtainedMarks >= 80:
    console.log("You got A Grade");
    break;
  case obtainedMarks >= 70:
    console.log("You got B Grade");
    break;
  case obtainedMarks >= 60:
    console.log("You got C Grade");
    break;
  case obtainedMarks >= 50:
    console.log("You got D Grade");
    break;
  default:
    console.log("You got F Grade");
}

console.log("---------Task 06: Even or Odd Number ---------");

let theNumber = 71;

if (theNumber % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

switch (true) {
  case theNumber % 2 === 0:
    console.log("The number is even");
    break;
  default:
    console.log("The number is odd");
}

theNumber % 2 === 0
  ? console.log("The number is even")
  : console.log("The number is odd");

console.log("---------Task 07: Find a Leap Year ---------");

// mod 4 = 0
// mod 100 && mod 400 = 0

let theYear = 1601;

if (theYear % 4 === 0) {
  if (theYear % 100 === 0 && theYear % 400 === 0) {
    console.log("This leap year is divisible by 100 and 400");
  } else if (theYear % 100 === 0) {
    console.log("This leap year is divisible by 100 only");
  } else {
    console.log("This leap year is not divisible by 100 and 400");
  }
} else {
  console.log("This is not a leap year");
}
