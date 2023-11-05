var fs = require('fs')

// var file = fs.readFileSync('intro.js', {encoding: 'utf8'})// to read file
// fs.writeFileSync('test.txt','Hello World!')// по този начин ще създадем и test.txt
// console.log(file);

fs.readFile('intro.js', {encoding: 'utf-8'}, function afterReadHandler(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    var result = data.split('process.nextTick')
    var processNextTickCount = result.length - 1
    // with regular : data.match(/process.nextTick/g) || [];

    //some methods taht we can use with regex
    ''.split(/a/);
    ''.replace(/a/);
    ''.match(/a/);
    ''.matchAll(/a/); // ES6
    fs.writeFile('process-next-tick-count', processNextTickCount.toString(), function(err) {
            if (err) {
                console.error(err);
                return;
            }

            console.log('Completed!');
    });
});

console.log('HELLO!')