const facto=(numo,calc)=>{
  if(numo==0){
    return 1
  }
  else{
  return(numo*facto(numo-1))
  }
}

let num=7

if(num<0){
  console.log("Enter a valid number")
}
else{
  facto(num)
  console.log("the factorial of "+num+" is "+facto(num))
}
  