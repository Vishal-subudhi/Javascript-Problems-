// let a = prompt("enter the First number");
// let b = prompt("enter the Secand number");
// a = Number.parseInt(a);
// b = Number.parseInt(b);
let a=23
let b=87

if (b > a) {
  let c = 0;
  c = a;
  a = b;
  b = c;
}
// console.log(a,b)

for (let j = b; j <= a; j++) {
  let q=0;
  for (let i = 1; i <= j; i++) {
    if (j % i == 0) {
      q++;
    }
  }
  if (q === 2) {
    console.log(j);
  }
}
