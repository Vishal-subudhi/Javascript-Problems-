// let Num=prompt("Enter a number")
// Num=Number.parseInt(Num)

let Num= 63;
let Num2= 66;
let sum=0
if(Num>Num2){
  for(i=1;i<Num;i++){
    if(Num%i==0 && Num2%i==0){
      sum=i;
    }
  }
}
else{
  for(i=1;i<Num2;i++){
    if(Num%i==0 && Num2%i==0){
      sum=i;
    }
  }
}

console.log(sum);