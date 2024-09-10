// JavaScript Program to Find Sum of Natural Numbers Using Recursion

const Recurs = (Num)=>{
  let sum=0
  sum=sum+Num
  return console.log(sum)
}

const main = ()=>{
  // let Num=Number.parseInt(prompt("Enter the Number: "));
  let Numb=5;
  let Sum=0
  for(i=1;i<=Numb;i++){
    let Sum1=Recurs(i);
    Sum=Sum+Sum1;
  }
  console.log(Sum)
}

main()