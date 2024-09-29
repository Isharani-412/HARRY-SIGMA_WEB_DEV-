console.log("Harry is a hacker")
console.log("Rohan is a hecker")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")
// -------------------------
//callback function=
//promises = usee to handle callback complicasy(solution to callback hell is promises)
const fn = () => {
  console.log("Nothing")
}
//short_cut of arrow functtion= anfn
const callback = (arg, fn) => {
    console.log(arg)
    fn()               //call fn function
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);      ///call the callback function with fn as a parameter
    document.head.append(sc)
}

//give link of prism js cdn code from google
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )