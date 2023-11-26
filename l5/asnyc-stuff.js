function syncIterator(list, fn) { // синхронно изпълнение
    for(let i = 0; i < list.length; i++) {
        fn(list[i]);
    }
}

function asyncIterator(list, fn) { // асинхронно изпълнение (когато има възможност се обработва)
    if(list.length === 0) {
        return;
    }

    setTimeout(() => {
        const item = list[0];
        fn(item);
        asyncIterator(list.slice(1), fn);
    }, 0);
}

process.nextTick(function nextTickAsyncOp() { // дава приоритет на асинхронна операция

})

