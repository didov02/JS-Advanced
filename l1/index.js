var myString = 'Hello World!';
myString += ' How are you?';

console.log(myString);

var myNumber = 4;
myString = myNumber;
myNumber = '4';

console.log(myString, myNumber);

var myNumber = Number('4321');
console.log(myNumber)
var myString = String(321321);
console.log(myString);
var myBoolean = Boolean('dsadsa');
console.log(myBoolean);

var myArr = Array();
var arr = [1, 2, 3, true, 'da'];
console.log(arr);
for (arg in arr) {
    console.log(arr[arg]);
}

var obj = {
    prop1 : 1,
    prop2 : 2, 
    prop3 : "String value",
}

console.log(obj.prop3);

function sum(a, b) {
    return a + b;
}

var result = sum(obj.prop1, obj.prop3)
console.log(result);