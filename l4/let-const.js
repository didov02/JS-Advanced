let a = 10; // block scope, not function scope  

var obj = {}
Object.defineProperty(obj, 'a', {
    get() {
        return 1000;
    }

    // or

    // value: 1000,
    // writable: false,
})