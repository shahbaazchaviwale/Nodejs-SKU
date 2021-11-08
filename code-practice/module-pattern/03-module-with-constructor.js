function greet3(){
    this.greet3Prop = 'add module with constructor';
    this.greet3Method = function(){
        console.log(this.greet3Prop);
    }
}

module.exports = new greet3();