let r1,r2;

let a=4;
let b=6;
let c=4;

let sol= b*b-4*a*c;

if(sol>0){
    r1=(-b+Math.sqrt(sol))/(2*a);
    r2=(-b-Math.sqrt(sol))/(2*a);

    console.log(`the eq are${r1}&${r2}`);
}
else if (sol==0) {
    r1=r2= -b/(2*a).toFixed(2);
    console.log(`the eq are${r1}&${r2}`);
}

else{
    let rp=(-b/(2*a)).toFixed(2);
    let ip=(Math.sqrt(-sol)/(2*a)).toFixed(2);

    console.log(`the eq are ${rp}+${ip}i & ${rp}-${ip}i`);
}