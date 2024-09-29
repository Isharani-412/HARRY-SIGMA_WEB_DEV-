var slugify= require('slugify')
//slugify (function) converts a string in to a slug (url)
let a= slugify('isha string')
console.log(a)

const b= slugify('isha string$%^&%%%', '_')
console.log(b)
