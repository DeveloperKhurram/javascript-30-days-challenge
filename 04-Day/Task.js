console.log("---------Task 01: For Loop - Print Numbers 1-10---------");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("---------Task 02: For Loop - Print Table 0f 5---------");

for (let i = 1; i <= 10; i++) {
  // 5 * 1 = 5
  console.log(`5 × ${i} = ${i * 5}`);
}

console.log("---------Task 03: While Loop - Sum of Numbers 1-10---------");

let sum = 0;
let i = 0;
while (i <= 10) {
  sum += i;
  i++;
}

console.log(sum);

console.log("---------Task 04: While Loop - Print numbers 10-1---------");

let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}

console.log("---------Task 05: Do...While Loop - Print numbers 1-5---------");

let number = 1;
do {
  console.log(number);
  number++;
} while (number < 6);

console.log("---------Task 06: Do...While Loop - Calculate Factorial---------");

let factorial = 1;
let givenNumber = 4;
let multiplier = 1;
do {
  factorial *= multiplier;
  multiplier++;
} while (multiplier <= givenNumber);

console.log(factorial);

console.log("---------Task 07: For Loop - Print pattern---------");

let star = ""

for (let a = 1; a <=5; a++) {
    for (let b = 1; b <=a; b++) {
        star += "*"
    }
    star += "\n"
}

console.log(star);

console.log("---------Task 08 & 09: Any Loop - Print 1-10 skip 5,7 and break at 8---------");

for (let i = 1; i <=10; i++) {
   if (i === 5 || i === 7) continue
   console.log(i);
   if (i === 8) break
}