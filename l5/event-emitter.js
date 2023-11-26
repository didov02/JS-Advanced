 const eventEmitter = {
    listeners: {},
    subscribe: (eventName, cb) => {
        // const listener = this.listeners[eventName] || [];
        // listener = listener.concat(cb); // създава нов списък към вече същестуващ, който добавя новия callback
        // this.listeners[eventName] = listener;
        // тази концепция може да се представи и чрез един ред
        this.listeners[eventName] = (this.listeners[eventName] || []).concat(cb)
    },
    emit: (eventName, data) => {
        // const eventListeners = this.listeners[eventName];
        // if(eventListeners) {
        //     for (let i = 0; i < eventListeners.length; i++) {
        //         const listener = eventListeners[i];
        //         listener(data);// извикваме всеки един от listener-ите
        //     }
        // }
        // тази концепция може и да се представи чрез един ред
        (this.listeners[eventName] || []).forEach(element => cb(data));
    }
 };
 //eventName -> името на дадено събитие
 //cb -> callback, който извикаме, когато се извика emit(eventName)
 //data -> данни, които ще се използват при извикване
 //listeners -> колекция, която съдържа всички event-и

 eventEmitter.subscribe('test', function cb(data) {console.log(1, data)});
 eventEmitter.subscribe('test', function cb(data) {console.log(2, data)});

 setTimeout(() => {
    eventEmitter.emit('test','HELLO');
 }, 5000);
 console.log(eventEmitter.listeners);