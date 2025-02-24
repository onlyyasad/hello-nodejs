const EventEmitter = require('events');

const myEmitter = new EventEmitter();

//listener: add event
myEmitter.on('birthday', () => {
    console.log("Hello Birthday event!")
})

myEmitter.on('birthday', (gift) => {
    console.log(`I will send a ${gift}`)
})

myEmitter.on('hit', (hit) => {
    console.log(`I will hit you with a ${hit}.`)
})

//emitter: trigger event
myEmitter.emit('birthday', "watch");
myEmitter.emit('hit', "hokey stick");

