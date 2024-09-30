
// var is global level / functional level
// let scope is block or global level


// let and var both CAN be reintitialized
// const variable CANNOT be REINITIALIZED

function add(a,b)
{
    return a+b 
}

let sum = add(2,3)
console.log(sum)


// do not have name => anyonymus function -- function expressions

let sumOfIntegers = function (c,d){
    return c+d
}  // let sumOfIntegers2= (c,d)=> (c+d) ....-----> this is a line of code that works same as above 3 lin3w

console.log(sumOfIntegers(2,3));


