let day = 'tuesday '
console.log(day.length)

let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1])

let splitDay = day.split("s")
console.log(splitDay)

console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)
// parseInt is used to convert a date or string to number
console.log("----------- changing dataType using Parse(parseInt, toString(), ) --------------")
let date = '14'
let nextDate = '17'
let diff = parseInt(date) + parseInt(nextDate)
console.log(diff)
diff.toString()

console.log("----------- concatenation of strings --------------")
let newQuote = day + "is Funday day"
console.log(newQuote)

console.log("----------- indexOf method --------------")
let val = newQuote.indexOf("day",5)
console.log(val)
// tuesday as Funday
let count = 0
let val2 = newQuote.indexOf("day")
while(val2 != -1){
    count++
    val2 = newQuote.indexOf("day", val2 + 1)
}
console.log(count)