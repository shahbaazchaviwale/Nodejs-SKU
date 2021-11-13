function Emitter(){
    this.events ={};
}

Emitter.prototype.on = function(types, listener){
    this.events[types] = this.events[types] || [];
    this.events[types].push(listener);
}

Emitter.prototype.emit = function(types){
    if(this.events[types]){
        this.events[types].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;