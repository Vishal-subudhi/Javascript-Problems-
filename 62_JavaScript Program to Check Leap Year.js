// JavaScript Program to Check Leap Year

let yer= 2015

if((yer%4 == 0) && (yer%100 != 0) || (yer%400 == 0)){
    console.log("leap year")
} else{
    console.log("Not leap year")
}