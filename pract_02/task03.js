function compose() {
    var fun = [...arguments];
    fun = fun.reverse();
    var a;

    return function callFunction(b) {
        a = fun[0].bind(this,b);
        for(var i = 1; i < fun.length; i++) {
            a = fun[i].bind(this,a);
        }
        a()
    }
    
}

var addOne = (x) => x + 1;
var sqrt = (x) => x * x;
var log = (x) => console.log(x);

addOneSqrtAndPrint = compose(log, sqrt, addOne);

addOneSqrtAndPrint(1); // 4