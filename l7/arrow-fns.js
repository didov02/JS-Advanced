function identity(a){ return a; }
//equal to:
const id = a => a;

const idObj = a => {{ a }}; //връщане на обект

const swap = ([a, b]) => [b, a]; //разменя двата елемента

swap([1, 2]) // връща масив с разменени стойности [2, 1]

const obj1 = {
    test: 123,
    getTest: function() {
        return this.test;
    },
}

const obj2 = {
    test: 123,
    getTest: () => {
        return this.test;
    },
}

console.log(obj1.getTest());
console.log(obj2.getTest()); // тук резултата е undefined заради arrow функцията