let str="aha"

let str1=""
for(let i of str){
  str1=i+str1
}
if(str===str1){
  console.log("this is a palendrom string")
}
else{
  
console.log("Not a palendrom String")
}