const { EventEmitter } = require('events')

const event = new EventEmitter()

event.on("SayHello", (name) => {
    console.log("Hello " + name + "!")
})

event.emit('SayHello', "Italo")
event.emit('SayHello', "Andre")

event.once('SayGoodbye', (name) => {
    console.log("Goodbye " + name + "!")
})

event.emit('SayGoodbye', 'Italo')
event.emit('SayGoodbye', 'Andre')