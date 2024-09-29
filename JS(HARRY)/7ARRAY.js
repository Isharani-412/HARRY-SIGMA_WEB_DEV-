// let arr=[2,5,7,8,9]
//index  0,1,2,3,4
// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[4])
// console.log(arr[2])

// arr[0]=77
// console.log(arr[0])     //array is mutable
// console.log(arr.toString())
// console.log(arr.join(" and "))

// arr.pop()  // delete from last
// arr.push()   
// arr.shift()   // delete from first
// arr.unshift()  // add element at begining
// arr.delete()   //from last(but array length remains same,arr[last]=undefined)


// let a=[2,3,4,5]
// let b=[4,5,8]
// let c=[6,8,4]
// a.concat(b,c)    
// a.sort()  
// a.splice(1,3)


let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2)    
console.log(numbers);           // OP: (3)[1, 4, 5]     //removes 2 elements starting from index 1.

numbers.splice(1, 3)  
console.log(numbers);           // OP:(1) [1]           //removes 3 elements starting from index 1.

numbers.splice(1, 3, 222, 333) 
console.log(numbers);         // OP:(3) [1, 222, 333]
//attempts to remove 3 elements starting from index 1 (but there’s only 1 element left), so it removes the last element and adds 222 and 333, resulting in [1, 222, 333].
   
// (4) [1, 222, 333, 5]