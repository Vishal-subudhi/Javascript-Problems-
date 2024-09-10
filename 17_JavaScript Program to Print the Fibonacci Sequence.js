// let a=prompt("Enter the number of iterations")
// a=Number.parseInt(a)

let a = 15;

let n1 = 0;
let n2 = 1;
let sum = 0;

console.log(`this is a fibnoacci series with ${a} iterations`);

for (let i = 0; i < a; i++) {
  console.log(n1);
  sum = n1 + n2; //0+1=1
  n1=n2;
  n2=sum;
}
