/* Create a faulty calculator using JavaScript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times
*/


let random = Math.random()
console.log(random)
let a = prompt("enter 1st nummber :")
let b = prompt("enter operation:")
let c = prompt("enter 3st nummber :")

let obj = {

    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
if (random < 0.1) {
    b = obj[b]
    // console.log(`the reasult is ${a} ${b} ${c}`)
     alert(`the reasult is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    // console.log(`the reasult is ${a} ${b} ${c}`)
    alert(`the reasult is ${eval(`${a} ${b} ${c}`)}`)

}


// let a=3;
// let b=6;
// let addition=a+b;
// let multiplication=a*b;
// let division=a/b;
// let subtraction=a-b;
// let exponentiation=a**b;
// let random = Math.random()*100;
// console.log(random);
// if(random<10){
//     console.log("the addition of a and b is ",subtraction);
//     console.log("the subtraction of a and b is ",division);
//     console.log("the multiplication of a and b is ",addition);
//     console.log("the division of a and b is ",exponentiation);
//     console.log("the exponentiation of a and b is ",multiplication);
// }
// else{
//     console.log("the addition of a and b is ",addition);
//     console.log("the subtraction of a and b is ",subtraction);
//     console.log("the multiplication of a and b is ",multiplication);
//     console.log("the division of a and b is ",division);
//     console.log("the exponentiation of a and b is ",exponentiation);
// }




// let a=10;
// let b=2;
// let c=Math.random();
// console.log(c);
// function add(a,b){
//     if(c>0.1)
//     console.log("Sum=",a+b);
//     else
//     console.log("Sum=",a-b);
// }
// function subtract(a,b){
//     if(c>0.1)
//     console.log("Difference=",a-b);
//     else
//     console.log("Difference=",a/b);
// }
// function multiply(a,b){
//     if(c>0.1)
//     console.log("Product=",a*b);
//     else
//     console.log("Product=",a+b);
// }
// function divide(a,b){
//     if(c>0.1)
//     console.log("Division=",a/b);
//     else
//     console.log("Division=",a**b);
// }
// add(a,b)
// subtract(a,b)
// multiply(a,b)
// divide(a,b)



// let num = Math.random()
// function faultyCalc(a, b) {
//     console.log("Addition answer : " + (a-b));
//     console.log("Subtraction answer : "+ (a/b));
//     console.log("Multiplication answer : "+ (a+b));
//     console.log("Division answer : "+ (a**b));
// }

// function nonFaultyCalc(a, b){
//     console.log("Addition answer : " + (a+b));
//     console.log("Subtraction answer : "+ (a-b));
//     console.log("Multiplication answer : "+ (a*b));
//     console.log("Division answer : "+ (a/b));
// }

// let a = parseInt(prompt("Enter first number : "));
// let b = parseInt(prompt("Enter second number : "));

// if(num < 0.1) faultyCalc(a, b);
// else nonFaultyCalc(a, b);