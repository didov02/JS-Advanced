function Person_v1(name, age) {
    Object.defineProperty(this, 'name', { get() { return name; }});
    Object.defineProperty(this, 'age', { get() { return age; }});
}

Person_v1.prototype.somePersonFunctionality_v1 = function() {
    console.log(this.name, this.age);
}

const Ivan = new Person_v1('Ivan', 35);
Ivan.somePersonFunctionality_v1();

class Person_v2 {
    #privateVar = 10;
    constructor(name, age) {
        Object.defineProperty(this, 'name', { get() { return name; }});
        Object.defineProperty(this, 'age', { get() { return age; }});
        this.#privateVar = 20;
    }
    somePersonFunctionality_v2() {
        console.log(this.name, this.age);
    }
}

class Employee extends Person_v2 {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    somePersonFunctionality_v2() {
        console.log(this.name, this.age, this.position);
    }
}

const petar = new Employee('Petar', 20, 'intern');
petar.somePersonFunctionality_v2();
petar.printPrivateVar();

