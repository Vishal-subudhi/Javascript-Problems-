let a = 365;
let c = 378;
// let b;

let sum;
for (let i = a; i <= c; i++) {
  let b = 0;
  let temp = i;
  sum=0;
  while (temp > 0) {
    b = temp % 10;
    sum = sum + b * b * b;
    temp = Math.floor(temp / 10);
  }
  if (sum == i) console.log(i);

}
