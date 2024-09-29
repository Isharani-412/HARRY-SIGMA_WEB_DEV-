console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);   //undefined (cause last index is 4)

console.log(a.length)


//when there are many variables used in a line,we use template literals,to make the code easy
//we can use both "", ''  inside backtick ` `
//when we insert variable inside  the ` ` ,it is known as "string inter-polation"
let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)    //template literals---> ` `, ${}

//can inspect in any webpage,and manipulate js
//to write special character,use escape seqyence like,(\;) , (\") ,
//"roh"on"--- will give (error),
//"roh\"on"--- will print (roh"on)

let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5))    //hiva
console.log(b.slice(1))       //hivamSh(1 to last index)

console.log(b.replace("Sh", "77"))    //77ivamSh    
//(if there are 2 "sh is the string,then it only replce the 1st one")
let r="ishaisha"
console.log(r.replace("Sh", "77"))      //ishaisha  (case sensitive)
console.log(r.replace("sh", "77"))      //i77aisha
//string is immutable


console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))    //ShivamShHarryAishwariyaRahulPriya

//console.log(b.)  //apply . to see more functions of string