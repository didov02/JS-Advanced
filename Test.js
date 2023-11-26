setTimeout(function () {
    console.log('setTimeout');
});

process.nextTick(function () {
    console.log('nextTick 1');
});

console.log('before');