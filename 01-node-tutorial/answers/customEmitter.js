const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('whats up', (name) => {
    console.log(`hey ${name}, how you doing?`)
});

customEmitter.emit('whats up', 'Kabuli')