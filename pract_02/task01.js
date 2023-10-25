function memoize (fun) {
    //if calculated already -> don't call fun
    //if it hasn't been calculated -> call fun

    var arr = [];
    function memoizeFunc() {
        var args = [arguments].slice.call(arguments); // convert arguments or user var args = [...arguments];
        
        if(arr[args]) {
            return arr[args];
        }

        arr[args] = fun.apply(this,arguments);
        return arr[args];
    }
}

var sum = function(x,y) {
    return x + y;
}

var memSum = memoize(sum);

console.log(memSum(2,3));
console.log(memSum(3,3));
console.log(memSum(2,3));