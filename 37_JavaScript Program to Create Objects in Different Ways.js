const obj = {
  nameIs: "Vishal",
  rollNo: 15085,
  placeE: "Odisha",
};

console.log(obj);
console.log(obj.nameIs);
console.log(obj.rollNo);
console.log(obj.placeE);

function obj1() {
  (this.nameIss = "Vishal"),
    (this.rollNoo = 15085),
    (this.placeEn = "Berhampur");
}

const objs1 = new obj1();

console.log(objs1.nameIss);
console.log(objs1.rollNoo);
console.log(objs1.placeEn);
