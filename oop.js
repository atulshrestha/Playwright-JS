
//Inheritance is the main pillar in object oriented programming
//one class can inherit/acquire the properties, Methods of another class
// the class which inherits the properties of other is known as subclass (derived class, child class)
//the class whose properties are inherited is known as superclass

const Person = require("./class");

class Pet extends Person{

    get location(){ // it will give preference to the current class .. we have the same method in parent class as well
        return "BlueCross"
    }
      
    constructor(firstName,lastName){
        //call parent class constructor
        super(firstName,lastName)
    }

}

let pet = new Pet("sandy","simpsons")
pet.fullName()
console.log(pet.location)

