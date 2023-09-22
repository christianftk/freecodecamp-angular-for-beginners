"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
const sub = (num1, num2) => num1 - num2;
console.log(sub(10, 3));
function getItems(item) {
    return new Array().concat(item);
}
let concatres = getItems([1, 2, 3, 5, 6, 7, 1]);
console.log(concatres);
