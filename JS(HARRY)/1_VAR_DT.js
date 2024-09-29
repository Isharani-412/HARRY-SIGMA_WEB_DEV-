
console.log("Hey this is tutorial 55");
console.error("err")
// console.alert("alert")
// @jaishikamal
// jaishikamal on Apr 27
// thanks for harry bhai .

//VARIABLE CAN'T BE STARTS WITH NUMBER(it can starts with _ , $ , alphabets)
//; is optional
//js is case sensitive
var a = 5;
a = a + 1
let b = 6;
let c = "Harry";
let _a = "Shubham";
// var 55a = "Rohan"; // Not Allowed
//therefore use "let" instead of "var"

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);

//"let" is a block scope
{
    // let a = 66;
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant


let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)
//Q= why is type(null) = object? 


//object= combination of key value pairs
let obj = {
    name: "Harry",      //"" is not necessery in name (cause there is not space)
    "job code": 5600,   //" is necessary cause there is space"
    "is_handsome": true
}

console.log(obj);
obj.salary = "100crores";
console.log(obj);
obj.salary = "500crores";
console.log(obj);


// primitive data types=null, undefined, Number , Boolean, String, bigInt,Symbol