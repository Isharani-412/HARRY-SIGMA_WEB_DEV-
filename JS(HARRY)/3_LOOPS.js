console.log("I am a tutorial on Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 10; i++) { 
//     console.log(a + i); 
// }


let obj = {
    name: "44",
    role: "Programmer",
    company: "CodeWithHarry AI"
}

// FOR IN LOOP   (used for objects)
for (const key in obj) {
    
    const element = obj[key];   //element=values {name,roll,company}
    // console.log(key, element)
    console.log(key)
}

//FOR OF LOOP  (used for iterable data str= string,array...)
for (const c of "Harry") {
    console.log(c)
}

b="isha"
for (const k of b) {
    console.log(k)
}


// let J = 0;
// while (J < 6) {
//     console.log(J)
//     J++;
// }

// let i = 10;
// do {
//     console.log(i)
//     i++;
// } while (i < 6);