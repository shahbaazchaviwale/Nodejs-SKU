function Greet4(){
    this.greet4Prop = 'module with constructor with no new object';
    this.greet4Method = function(){
        console.log(this.greet4Prop);
    }
}

module.exports = Greet4;