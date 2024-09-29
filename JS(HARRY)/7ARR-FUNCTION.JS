let arr = [1, 13, 5 ,7, 11];
//let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
//     console.log(arr)
    // console.log(newArr)      //(5) [1, 169, 25, 49, 121]
//  }

//or:
let newArr = arr.map((e)=>{
    return e**2                     //(5) [1, 169, 25, 49, 121]
})
console.log(newArr)

//filter(): 
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

//reduce(): 
let arr2 = [1,2,3,4,5,6]
const red = (a, b)=>{    //red function(by user)
    return a*b
}
console.log(arr2.reduce(red))

//Array.from()= used to create array from any other object
//Array.from("isha")   //in console
let c="rani"
Array.from(c) 
