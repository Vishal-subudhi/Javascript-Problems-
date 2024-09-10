// // JavaScript Program to Encode a String to Base64

// const str="hi i am vishal";

// const r= window.btoa(str);
// console.log(r);

// const r1= window.atoa(str);
// console.log(r1)

// program to encode a string to Base64
// defining the string
const str = "Learning JavaScript"; 

// encoding the string
const result = window.btoa(str);
console.log(result);

// decoding the string
const result1 = window.atob(result);
console.log(result1);