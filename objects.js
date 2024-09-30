const Person =  require('./class')

// object is collection of properties

// let person = {
//     firstname: 'Tim',
//     lastname: 'Joe',
//     age: 24,
//     fullName: function()
//     {
//        console.log(this.firstname + this.lastname)
//     }
// }
// console.log(person.fullName())
// console.log(person.lastname)
// console.log(person['lastname'])

// person.firstname = 'Atul'// Assigning the value at the runtime
// console.log(person.firstname)
// person.gender = 'male'
// console.log(person)
// delete person.gender
// console.log(person)



// console.log('gender'in person)

// //print all the values of javascript object
// for(let key in person)
// {
//     console.log(person[key])
// }


let person = new Person("Atul","Shrestha")
console.log(person.fullName())