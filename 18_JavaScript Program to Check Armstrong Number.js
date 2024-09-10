// let a=prompt("Enter a number")
// a=Number.parseInt(a)

let a = 157;
let temp = a;
let b;

let sum = 0;

while (a > 0) {
  b = a % 10;
  sum = sum + b * b * b;
  a = Math.floor(a / 10);
}

if (sum == temp) console.log("Armstrong number");
else console.log("Not an Armstrong number");
