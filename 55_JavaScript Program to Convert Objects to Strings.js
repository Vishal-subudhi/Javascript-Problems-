// JavaScript Program to Convert Objects to Strings

const obj={
    vName: "Vishal",
    vAge: 24,
    vgender : "Male"
}

let result=" "

for(let key in obj){
    result = result + " " + obj[key]
    let rm= String (obj[key])
    console.log(typeof rm,rm)
}

console.log(result.trim())

