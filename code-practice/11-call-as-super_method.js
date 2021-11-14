var util = require('util');

function Person(){
    this.fname = 'Jhon';
    this.lname = 'Doe';
}

Person.prototype.details = function(){
    console.log(`Hello : ${this.fname} ${this.lname}, ${this.badgeNumber}`);
}

function Policeman(){
    //below I am allowing to get all access of "Person"s props & methods in "Policeman" constructor
    Person.call(this); //act as super() 
    this.badgeNumber ='7895213';
}

util.inherits(Policeman, Person);
var officer  = new Policeman();
officer.details();