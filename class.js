module.exports =  class Person{
    age = 25
    //location="canada"

    //properties getter method
    get location(){
        return "canada"
    }

    //constructor is a method which executes by default when we create object of class
    constructor(firstName,lastName)
    {
        this.firstName = firstName,
        this.lastName = lastName
    }
 
    // fullName is a method 
    fullName()
    {
        console.log(this.firstName+" "+this.lastName)
    }


}

//let person = new Person("Tim","Li")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())