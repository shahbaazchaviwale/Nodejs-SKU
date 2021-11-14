let obj = {
    fname: 'samul',
    greet: function(){
        console.log(`Hello : ${this.fname}`);
    }
}

let obj1 = {
    lname: 'dsouza',
    greet: function(){
        console.log(`Hello : ${this.lname}`);
    }
}
console.log('--------------OBJ-1----------------');

obj.greet();
// changes current object prop, pass 2nd args with seperated "," ex: param-1, param-2, param-3
obj.greet.call({fname: 'mathew'});
// changes current object prop, pass 2nd args as array list  ex: [param-1, param-2, param-3]
obj.greet.apply({fname: 'monaliza'});
obj.greet();

console.log('--------------OBJ-2----------------');
obj1.greet();
obj1.greet.call({lname: 'avanchono'});
obj1.greet.call({lname: 'amenda'});
obj1.greet();



