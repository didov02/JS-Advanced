console.log("Hello World");

var word = 5;
word+=1;
console.log(word);

var arr1 = Array();
arr1.push(1);
arr1.push(2,3,4);
console.log(arr1);
var length = arr1.length;
console.log(length);

var arr2 = [1,2,3,5];
console.log(arr2);

var obj = {
    prop1 : 1,
    prop2 : 2,
    prop3 : 3
}

console.log(obj);

obj.prop4 = 4;

console.log(obj);

function sum1(a,b) {
    return a+b
}

console.log(obj.prop1);
console.log(obj.prop2);
console.log(sum1(obj.prop1,obj.prop2));

obj.prop5 = "Property number five";

var sum =0;
for(var prop in obj) {
    if(typeof obj[prop] === 'number') {
        sum1+=obj[prop];
    }
}
console.log(sum1);

function containerSum(obj) {
    var sum = 0;

    for(var prop in obj) {
        if(typeof obj[prop] === 'number') {
            sum+=obj[prop];
        }
    }

    return sum;
}

function isContainer(obj) {
    return obj instanceof Array ;
}

function addSum(obj) {
    var sum =0;

    if(isContainer(obj)) {
        sum += containerSum(obj);
    } else {
        sum +=obj;
    }

    return sum;
}

function sum1(a,b) {
    var sum = addSum(a) + addSum(b);
    return sum;
}

var wholeSum = sum1([1,2,3],4);
console.log(wholeSum);

