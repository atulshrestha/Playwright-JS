let mark = Array(6)
var marksVar = new Array(20,40,35,12,37,100)


var marks = [20,40,35,12,37,100]
console.log("----------------------------Array's n th item -------------------------------")
console.log(marks[1])
marks[3] = 80

console.log("----------------------------Array Items-------------------------------")
console.log(marks)// printing all array value

console.log("----------------------------Array Length-------------------------------");
console.log(marks.length) // array length

console.log("----------------------------Append 66 using PUSH-------------------------------");
marks.push(66)
console.log(marks)

console.log("----------------------------Poping out 66 using POP(last item of array will be poped)-------------------------------");
marks.pop()
console.log(marks)

console.log("----------------------------INSERT at START of array using  unshift -------------------------------");
marks.unshift(99);
console.log(marks)

console.log("----------------------------Finding the index of array------------------------------")
console.log(marks.indexOf(37))

console.log("---------------------------Validate an item is present in array  -------------------------------");
console.log(marks.includes(88))

console.log("----------------------------Creating a sub array from main ARRAY using slice[first index, intended index] -------------------------------");
var subMarks = marks.slice(2,5)
console.log(subMarks)
console.log("----------------------------Array items using FOR loop-------------------------------");

let sum = 0;
for (let i =0; i<marks.length; i++)
{
    //console.log(marks[i])
    sum = sum + marks[i];
}
console.log(sum)

console.log("----------------------------Reduce filter map-------------------------------")
let marksSumUsingReduce = marks.reduce((sum,totalMarks)=>sum+totalMarks,0)
console.log(marksSumUsingReduce)

console.log("----------------------------Creating a new array by inserting -------------------------------");
var scores = [12,13,14,15,16]
// var evenScore=[]
// for (let i=0; i<scores.length; i++){
//     if(i%2 == 0){
//         evenScore.push(scores[i])
//     }
// }
// console.log(evenScore)
let newFilterEvenScores = scores.filter(scores=>scores%2==0)
console.log(newFilterEvenScores)

// Mapping from one value to a new one
console.log("----------------------------Mapped Array-------------------------------");
let newMappedElements = newFilterEvenScores.map(scores=>scores*3)
console.log(newMappedElements)

let totalVal = newMappedElements.reduce((sum,val)=>sum+val,0)
console.log(totalVal)



console.log("----------------------------Mapped array in single line-------------------------------");
var scores1 = [12,13,14,15,16]
let easyMapSteps = scores1.filter(scores1=>scores1%2==0).map(scores1=>scores1*3).reduce((sum,val)=>sum+val,0)
console.log(easyMapSteps)

console.log("----------------------------Sorting Array------------------------------");
var fruits = ['apple','grapes','mango','dragonfruit']
console.log(fruits.sort()) // this can only sort strings

let notSortedIntegersArray=[12,13,3,16,19,11,25]

notSortedIntegersArray.sort(function(a,b){
    return a-b
})
console.log(notSortedIntegersArray.sort((a,b)=> a-b)) // this is custom logic with sort such that it is a bubble sort in recursive manner



console.log("-----------------------------------------------------------");
