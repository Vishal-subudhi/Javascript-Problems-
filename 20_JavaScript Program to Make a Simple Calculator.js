let Opr = Prompt("Enter an arthematic operation (+ , - , * , /)");
let num1 = Prompt("Enter the first number");
let num2 = Prompt("Enter the second number");

num1 = Number.parseInt(num1);
num2 = Number.parseInt(num2);

let sum = 0;

if ((Opr = "+")) console.log((sum = num1 + num2));
if ((Opr = "-")) console.log((sum = num1 - num2));
if ((Opr = "*")) console.log((sum = num1 * num2));
if ((Opr = "/")) console.log((sum = num1 / num2));
