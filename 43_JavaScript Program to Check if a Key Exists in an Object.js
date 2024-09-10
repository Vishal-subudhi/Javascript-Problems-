const person = {
    id : 1,
    subName : "Vishal",
    class : "5th",
}

const doseHave = "subName" in person;

if(doseHave){
    console.log("It hs key")
}
else{
    console.log("It does not hs key")
}