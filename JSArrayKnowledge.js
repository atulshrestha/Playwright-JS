// ------ ex 1 ------ MIN MAX ---------------------------
let expenses = [100,200,30,40,80]

let sum = 0
let totalLength = expenses.length
for(let i=0;i<totalLength;i++){
    sum = sum + expenses[i]
}

console.log(sum)

let minExpenses = Math.min(...expenses)
let maxExpenses = Math.max(...expenses)

console.log("Highest Expenses = "+ maxExpenses)
console.log("Lowest Expenses = " + minExpenses) 



// ------ ex 2 ------ Manipulate array of strings add remove sort ---------------------------
let studentNames = ["Anjan","Sakar","Prayash","Astha","Golay"]
console.log("-------------------------------------------------------------------------------------------------")
// adding a student at the beginning of an array
studentNames.unshift("Roja")
console.log("After adding name in the beginning:  " +studentNames)

// remove the last student from array
studentNames.pop()
console.log("After poping last item in array:  " + studentNames)

// Sorting elements of array
console.log(studentNames.sort())


// ------ ex 3 ------ Transformations and Calculations to array elements and filter elements ---------------------------
let productPrices = [23,21,15,90,66,78]
console.log("-------------------------------------------------------------------------------------------------")
// applying 10% discount on each of the array items
let dis = 10/100
let newPrice = []
let arrayLength = productPrices.length
for(let i =0; i<arrayLength; i++){
    let priceAfterDis = productPrices[i] - (dis * productPrices[i])
    newPrice.push(priceAfterDis)
}
console.log(newPrice)

const lessThanFifty = productPrices.filter(affordableProduct)
// using filter 
function affordableProduct(priceLessThanFifty){
    return priceLessThanFifty < 50;
}
console.log(lessThanFifty)

// using reduce to calculate the sum of array elements
let initialValue = 0
let sumWithInitial = productPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
)
console.log(sumWithInitial)

