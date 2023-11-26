var gen = getNaturalNumberGenerator(10);

console.log(gen(function inc(test) {
    console.log('>>',test++);
    console.log('>>',test);
    return test;
}));

function getNaturalNumberGenerator(counter) {
    counter = counter || 0;
    return function naturalGenerator(processor) {
        if(processor) {
            counter = processor(counter);
        }

        return counter++;
    }
}

function getThisClosure(a) {
    a = a || 0;
    function thisIsClosure() {
        return b + 10;
    }

    var b = 30;
    return thisIsClosure;
}

var result = getThisClosure(10)();
console.log(result);

var myLib = (function (config) {
    var privateObjectVariable = config.value || 0;
    var api = {
        incrementPrivateVariable: function() {
            return privateObjectVariable++;
        }
    };

    return api;
})({value: 10});

myLib.incrementPrivateVariable();
console.log(myLib.privateObjectVariable);