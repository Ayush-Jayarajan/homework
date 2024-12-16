// 1- multiplication table 0f 5 using do while loop
let a = 5;
let b = 1;
do {
  console.log(`${a} x ${b} = ${a * b}`);
  b++;
} while (b <= 5);

// 2-sum of n natural numbers using for loop
// initialise the variable
// this variable is a container to store the sum of n number
let sum = 0;
let d = 18;
// d natural number
for (let i = 1; i <= d; i++) {
  sum = sum + i;
}
console.log(`sum of ${d} numbers = ${sum}`);

// 3-reverse a given number using while loop (1234567 to 7654321)
let num = 12343123120;
let reverse = 0;
while (num > 0) {
  a = num % 10;
  reverse = reverse * 10 + a;
  num = Math.floor(num / 10);
}
console.log(reverse);

// 4-count digits in a number using do while
// initialise a number and count value
let num1 = 345565;
let digitcount = 0;
// start the do while loop
do {
  digitcount = digitcount + 1;
  num1 = Math.floor(num1 / 10);
} while (num1 > 0);
console.log(digitcount);

// 5-factorial of a given number using both for and while loops

let fact = 1;
let numfact = 12;
for (let k = 1; k <= numfact; k++) {
  fact = fact * k;
}
console.log(fact);

let fact1=1;
let l=1;
while(numfact>=l){
    fact1=fact1*l;
    l=l+1;
}
console.log(fact1);
