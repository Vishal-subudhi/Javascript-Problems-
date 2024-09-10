const funCount = (str1)=>{
  let co=0
  for(let i in str1){
    if(str1[i]=="a"|| str1[i]=="e"|| str1[i]=="i"|| str1[i]=="o"|| str1[i]=="u"){
      co++
  }
}
  return co
}

console.log(funCount("aeiu"))