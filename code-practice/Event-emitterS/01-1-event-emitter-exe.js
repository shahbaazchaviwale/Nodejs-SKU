const Emitter = require('./01-0-event-emitter');

var emtr = new Emitter();
// call maultiple times here
emtr.on('greet', function(){
    console.log('Greet-1 called !!');
});

emtr.on('greet', function(){
    console.log('Greet-2 called !!');
});

emtr.on('greet', function(){
    console.log('Greet-3 called !!');
});


emtr.on('greet-2', function(){
    console.log('Greet-4 called !!');
});
console.log('------------------------');
// name must be same as on "on" events 
emtr.emit('greet');
emtr.emit('greet-2');