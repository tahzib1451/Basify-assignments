//Task 01
let a=10;
let b=5;
let add = a+b;
let sub = a-b;
let mul = a*b;
let div = a/b;

console.log (add);
console.log (sub);
console.log (mul);
console.log (div);

//Task 02
let Cel;
let Fah;
Cel=40;
Fah = (Cel*9/5)+32;

console.log(Fah+`F`);

//Task 03
const x=10;

if (x>0){
    console.log(`${x} is a positive number`)
}else if (x<0){
    console.log(`${x} is a negative number`)
}else{
    console.log(x==0)
};

//Task 04
let mark;
mark=100
if(mark<0 || mark>100){
    console.log (`Not a valid grade number`)
}else if (mark>=90){
    console.log ("A");
}else if(mark>80){
    console.log ("B");
} else if (mark>70){
    console.log ("C");
} else if (mark>=60){
    console.log ("D");
} else {
    console.log ("F");
}

//Task 05
let num;
num=0
if(num%2==0){
    console.log("Even");
} else{
    console.log("Odd");
}