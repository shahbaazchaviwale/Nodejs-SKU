'use strict';
// create constructor
class Person {
    constructor(fname, lname){
        this.first_name = fname;
        this.last_name = lname;
    }
    greet(){
        console.log('Hello, ' +this.first_name +" " +this.last_name +" " +this.mobile);
    }
}

//add property/value in "PERSON" class after creation
Person.prototype.mobile = '789456132';



// call constructor
var profile1 = new Person('Maci','Hony');
profile1.greet();

//check prototype added list
console.log(profile1.__proto__);



