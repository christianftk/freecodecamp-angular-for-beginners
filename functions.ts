function add(num1: number, num2: number) : number{
    return num1 + num2;
}

console.log(add(2,3));

const sub = (num1: number, num2: number) : number => num1 -num2;
console.log(sub(10,3));

function getItems<T>(item : T[]):T[]{
    return new Array<T>().concat(item);
}

let concatres = getItems([1,2,3,5,6,7,1]);

console.log(concatres);