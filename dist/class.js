"use strict";
var _Person_heigth;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    login() {
        return {
            name: this.name,
            id: 2,
            email: "",
        };
    }
}
let john = new Employee();
console.log(john);
john.id = 2;
john.name = "GIOVANNI";
console.log(john);
class Person {
    // No multiple constructor() allowed -
    constructor(age, name, address) {
        _Person_heigth.set(this, void 0); // # means private
        this.age = age;
        this.name = name;
        this.address = address;
    }
    // Methods don't need 
    introduction() {
        return "hello i am " + this.age + " " + this.name;
    }
}
_Person_heigth = new WeakMap();
let persona = new Person(23, "Joker");
console.log(persona);
console.log(persona.introduction());
