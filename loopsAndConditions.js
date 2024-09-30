const flag = true
console.log("------------------------ example 1 ---------------------------")
if(!flag) // here expression is converted to FALSE but the value of flag is still TRUE and it will remain same throughout the program
{
    console.log("condition satisfied")
}
else
{
    console.log(flag)
    console.log("condition not satisfied")
}

console.log("------------------------ example 2 ---------------------------")
let i = 0
while(i < 10)
{
    i++
    console.log("I am inside a while LOOP for "+i+" th time")
}


// loop will run once irrespective 
// do{
//     i++
// }
// while(i > 10);
// console.log(i)
console.log("------------------------ example 3 ---------------------------")
for(let k=0; k<=10; k++)
{       
   
    console.log(k)
}

let required = true
console.log("------------------------ example 4 ---------------------------")
while(required)
{
    
    i++
    console.log(required)
    required = false
}


console.log("------------------------ example 5 ---------------------------")

let n = 0
for(let k=1; k<=100; k++)
{
    if(k%2 == 0 && k%5 == 0){
        n++;
        console.log(k)
        if (n == 3){
            break;
        }
    }
    else{
       // console.log(k + " is not divisible by 2 AND 5")
    }
}




console.log("------------------------ example 6 ---------------------------")
console.log("------------------------ example 7 ---------------------------")
console.log("------------------------ example 8 ---------------------------")
console.log("------------------------ example 9 ---------------------------")