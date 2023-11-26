const fs = require('fs');

const {Transform} = require('stream');

const readStream = fs.createReadStream('./source.txt', {encoding: 'utf-8', highWaterMark: 5});
const writeStream = fs.createWriteStream('./output.txt', {encoding: 'utf-8'});

const replacementMap = { // ще преобразува ключовете с техните стойности
    someValue: 'HELLO WORLD',
    OOO: '123'
}

function transformText(replacementMap, targetString) { // функция за трансформиране на текст
    for (const key in replacementMap) {
        const regex = new RegExp(key); // създаване на регулярен израз, ако сложим , g след key ще се изпълни за всички
        const replacement = replacementMap[key]; // взимаме стойността
        targetString = targetString.replace(regex, replacement); // заменяме
    }

    return targetString;
}

//console.log(transformText(replacementMap, 'HELLLOOOOOOOOOOOOOO someValue'));

const transformStream = new Transform({
    encoding: 'utf-8',
    transform(chunk, encoding, cb) {
        const chunkString = chunk.toString();
        const isChunkNull = chunk === null;
        if (chunkString.includes('\n')) {
            const lines = isChunkNull ? [] : (this.buffer = chunkString).split('\n'); // сплитваме на нови редове и правим проверката в случай, че chunk e null
            this.buffer = lines.slice(-1)[0]; // взимаме последното парченце
            const rest = lines.slice(0, -1); // взимаме всичко без последното парче
            let transformed = [];
            for(let i = 0; i < rest.length; i++) {
                const currentLine = rest[i];
            transformed = transformed.concat(transformText(replacementMap, currentLine)); // трансформира текущотото парченце
            }

            const transformedText = transformed.join('\n');
            this.push(transformedText);
            if(isChunkNull) {
                this.push(null); // края на stream-a
            }
            return cb();
        }
        this.buffer = (this.buffer || '') + chunkString;
        cb();
    }
});

transformStream.buffer = '';

readStream.pipe(transformStream).pipe(writeStream); // прочитаме информацията, трансформираме я и я предаваме към потока за записване
