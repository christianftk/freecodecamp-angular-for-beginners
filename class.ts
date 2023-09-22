import {User,Login} from "./interface";

class Employee  implements Login{
    id! : number;
    name! : string;
    address! : string;

    login(): User {
        return {
            name: this.name,
            id: 2, 
            email: "",
        }
    }
}

let john = new Employee()

console.log(john);

john.id = 2;
john.name = "GIOVANNI";
console.log(john);

interface Address {

    street: string,
    city: string,
    state: string,
}

class Person{
    age: number;
    name: string;

    address?: Address;

    #heigth!: number; // # means private

    // No multiple constructor() allowed -

    constructor(age: number, name: string, address?: Address){
        this.age = age;
        this.name = name;
        this.address = address;
    }

    // Methods don't need 
    introduction() : string{
        return "hello i am " + this.age + " " + this.name;
    }
}

let persona = new Person(23, "Joker");

console.log(persona);
console.log(persona.introduction());