function curry(additionalFun) {
    var arr = [];
    var len = additionalFun.length;
    //if length equals three call function trippleAdd

    return function callFunction() {
        arr.push(...arguments);

        if(arr.length === len) {
            return additionalFun.apply(this,arr);
        }
        
        return callFunction;
    }
}

function trippleAdd(a, b, c) {
    return a + b + c;
}

cTrippleAdd = curry(trippleAdd);

console.log(cTrippleAdd(1)(2)(3)); //6
console.log(cTrippleAdd(1, 2)(3)); //6
console.log(cTrippleAdd(1, 2, 3)); //6