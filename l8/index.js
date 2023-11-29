function iteratorFactory_v1(iteratorData) { // creating iterator
    let counter = 0;

    return {
        next() { // get next element in iteratorData
            const completed = counter === iteratorData.length;
            if (completed) return { value: null, completed };
            const value = iteratorData[counter++]; // get element value
            return { value, completed }; // return object with variables the value and whether the iterableData is completed
        }
    };
}

const iter_v1 = iteratorFactory_v1([1, 2, 3]);
console.log(iter_v1.next());
console.log(iter_v1.next());
console.log(iter_v1.next());
console.log(iter_v1.next());

function* genFactory() { // create a generator function
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const g = genFactory(); // create a generator object
console.log(g.next()); // gets data as object with variables the value and whether the generator is finished
console.log(g.next()); // { value: 2, done: false }
console.log(g.next());
console.log(g.next());
console.log(g.next()); // { value: undefined, done: true }

function iteratorFactory_v2(iteratorData) {
    return (function* () { // creating generator function
        let counter = 0;
        while (counter < iteratorData.length) {
            yield iteratorData[counter++];
        }
    })();
}

const iter_v2 = iteratorFactory_v2([1, 2, 3]); // creatubg generator object
console.log(iter_v2.next());
setTimeout(() => { // print next values after 5 seconds
    console.log(iter_v2.next());
    console.log(iter_v2.next());
    console.log(iter_v2.next());
}, 5000);