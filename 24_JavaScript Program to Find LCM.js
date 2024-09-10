// let Num1=Number.parseInt(prompt("Enter the first number"));
// let Num2=Number.parseInt(prompt("Enter the second number"));

let Num1= 8
let Num2= 6

let sml=(Num1>Num2)? Num1 : Num2;

while(true){
  if(sml%Num1==0 && sml%Num2==0){
    console.log(`the LCM of ${Num1} and ${Num2} is ${sml}`);
    break;
  }
  sml++;
}

