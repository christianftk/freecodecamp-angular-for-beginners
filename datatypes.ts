let lname = 'John';

lname = "giovanni";
let newname = lname.toUpperCase();

console.log(newname);

let age: number;

age = 22;

console.log(age);

let sage: string;

let newage: number;

sage = "10";

newage = parseInt(sage);

console.log(newage);

//let empplist = [];

let list : string[];

list = ["item1", "item2"];
let generics : Array<number>;

generics = [1,2,3,4];

let result = generics.filter((num) => num > 2);

console.log(generics);
console.log(result);

let resultS = list.find((stri) => stri === "item2");

console.log(list);
console.log(resultS);

let resultSum = generics.reduce((acc, num) => acc + num);

console.log(generics);
console.log(resultSum);

// Add const to make a thinner enumeration (in javascript code)
const enum Color{
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;


