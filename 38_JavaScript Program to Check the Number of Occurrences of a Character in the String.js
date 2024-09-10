// JavaScript Program to Check the Number of Occurrences of a Character in the String

let str= "Hi i am Harish"
let co=0,arr=[ ]

for(let i=str.length-1;i>=0;i--){
  for(let j in str){
    if(str[i]==str[j]&& str[i]!=" ")
      co++
  }
  if(co>=2){
    // Push.arr(str[i])
    console.log(`${str[i]} is repeated ${co} times`)
  }
  co=0;
}