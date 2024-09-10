// let a=prompt("Enter a number")
// a=Number.parseInt(a)

let a=13

let q=0
for(let i=1;i<=a;i++)
  {
    if(a%i==0){
      q++;
    }
  }

if(q==2){
  console.log("Prime Number")
}
else
{
  console.log("Not a Prime Number")
}