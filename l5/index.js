const fs = require('fs');
const readStream = fs.createReadStream('./test.txt', {highWaterMark : 1});// стрийм за четене

readStream.on('data', function readData(chunk){
    console.log(chunk);// ще прочете информацията от test.txt
});
//chunk - буфер или стринг
//highWaterMark - задава големина на буфера
//'data' -> взима информацията от дадения файл подаден на readStream

readStream.on('end', function onEnd() {
    console.log('Read stream ended.');
});


// Readable stream example
const {Readable} = require('stream');
const data = ['This', 'is', 'some', 'data', 'located', 'somewhere'];

// създаване на readable stream
const readableStream = new Readable({
    read(size) {
        if (data.length === 0) {
            return this.push(null); // затваряне на стрийма
        }

        this.push(data.shift());// премахваме първия елемент и го push-ваме надолу по списъка
    }
});

readableStream.on('data', function(chunk) { // прочитане на данни
    console.log(chunk.toString());
});

readableStream.on('end', function() { // действие при приключване на стрийма
    console.log('Read stream ended.');
});

const {Writable} = require('stream');
const data2 = []
const writableStream = new Writable({
    write(chunk, encoding, cb) {
        data2.push(chunk.toString());
        setTimeout(function() {
            console.log("Give me next chunk");
            cb();
        }, 5000);
    }
});

writableStream.on('finish', function() {
    console.log(data2);
    console.log("Writable stream finished.");
});

writableStream.write('1');
writableStream.write('2');
writableStream.write('3');
writableStream.write('4');
writableStream.end(); // за да кажем на stream-a да приключи