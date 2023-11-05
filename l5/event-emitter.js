const { listeners, eventNames } = require("process");

//pubsub
const eventEmiiter = {
    listeners: {},
    subscribe(eventName, cb) {
        // const eventListeners = this.listeners[eventName] || [];
        // eventListeners = eventListeners.concat(cb);
        // this.listeners[eventName] = eventListeners;
        //or
        this.listeners[eventName] = (this.listeners[eventName] || []).concat(cb)
    },
    emit(eventEvent, data) {
        // const eventListeners = this.listeners[eventName];
        // if(eventListeners) {
        //     for(let i = 0; i < eventListeners.length; i++) {
        //         const listener = eventListeners[i];
        //         listener(data);
        //     }
        // }
        //or
        (this.listeners[eventEvent] || []).forEach(cb => cb(data));
    }
}

eventEmiiter.subscribe('test', function cb(data) { console.log(1, data)});
eventEmiiter.subscribe('test', function cb(data) { console.log(2, data)});
console.log(eventEmiiter.listeners);

setTimeout(() => {
    eventEmiiter.emit('test', 'Hello!');
}, 5000);