// const s1 = Symbol.for('test');
// const s2 = Symbol.for('test');

// const obj = {
//     [s1]() {
//         console.log('Hello from my cool method');
//     },
//     regularMethod() {
//         console.log('Hello from my not so cool method.');
//     },
// }

// obj.regularMethod();
// obj['regularMethod']();
// obj[Symbol.for('test')]();

// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertySymbols(obj));

// const a1 = Symbol('TEST');
// const a2 = Symbol('TEST');

// console.log(a1 === a2);

const obj_v1 = {
    a: 1,
    b: 2,
    c: 3,

    [Symbol.iterator]() {
        let counter = 0;

        const next = () => {
            const entries = Object.entries(this);
            const done = counter === entries.length;
            const value = entries[counter++];
            return {value, done};
        };

        return { next };
    }
};

for (const a of obj_v1) {
    console.log(a);
}

const obj_v2 = {
    a: 1,
    b: 2,
    c: 3,

    *[Symbol.iterator]() {
        let entries = Object.entries(this);
        let counter = 0;
        while (counter !== entries.length) {
            yield entries[counter++];
            entries = Object.entries(this);
        }
    }
}

function* gen() {
    let counter = 0;

    while(true) {
        const newCounter = yield counter++;
        counter = typeof newCounter === 'number' ? newCounter : counter;
    }
}

const iter = gen();

console.log(iter.next()); // 0
console.log(iter.next()); // 1
console.log(iter.next()); // 2
console.log(iter.next()); // 3
console.log(iter.next(10)); // 10
console.log(iter.next()); // 11