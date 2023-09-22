export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}


var Users = {
    name: '',
    age: 1,
    id: 1,
    email: "",
};

interface Emp extends User {
    salary: number;
}

let employee : Emp = { name: "Giova", id: 2, email: "", salary: 1000};

// export means this interface can be used outside of the class
export interface Login {
    login(): User;
}

// Decorator, gotta enable decorators Es7 tsconfig.json
@Component({})
class Component{
    constructor(public name:string){}
}
