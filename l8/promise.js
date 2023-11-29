const fs = require('fs');

function readFile(filePath, options) {
    return new Promise((res, rej) => {
        fs.readFile(filePath, options, (err, data) => {
            if(err) return rej(err);
            res(data);
        });
    });
}

function writeFile(filePath, data, options) {
    return new Promise((res, rej) => {
        fs.writeFile(filePath, data, options, (err) => {
            if(err) return rej(err);
            res();
        })
    });
}

readFile('test.txt', { encoding: 'utf-8' })
    .then(data => writeFile('test.txt', data.slice(0, -1) + ' WORLD!')) // write the word to the test.txt
    .then(() => true) // check if the file is successfully written
    .catch(err => { console.error(err); return false;}) // used to handle any errors that occur during the process
    .then((success) => console.log(success ? 'File successfully updated!' : 'File not updated!')); // if the file is successfully updated logs certain result

