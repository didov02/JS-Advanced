const fs = require('fs');
const readStream = fs.createReadStream('./test.txt', {highWaterMark: 1});
//highWaterMark specifies the size of the buffer used when reading data

readStream.on('data', function readData(chunk) {
    console.log(chunk);
});

readStream.on('end', function onEnd() {
    console.log('Read stream ended');
});

//Readable stream example
const {Readable} = require('stream');
const data = ['This', 'is', 'some', 'data', 'located', 'somewhere'];

// creating custom readable stream
const readableStream = new Readable({
    read(size) {
        if (data.length === 0) return this.push(null) // push data
        this.push(data.shift());
    }
})

// Read data from the custom readable stream
readableStream.on('data', function(chunk) {
    console.log(chunk.toString()); // Outputs 'This is some data located somewhere'
});

readableStream.on('end', () => {
    console.log('Read stream ended');
});

const {Writable} = require('stream');
data = [];
const writableStream = new Writable({
    write(chunk, encoding, cb) {
        data.push(chunk.toString());
        setTimeout(function() {
            console.log('Give me next chunk');
            cb();
        }, 1000)
    }
});

writableStream.on('finish', function() {
    console.log(data);
    console.log('Writable stream finished');
});

writableStream.write('31');
writableStream.write('32');
writableStream.write('33');
writableStream.write('34');
writableStream.write('35');
writableStream.end();