function Person(fname, lname){
    this.first_name = fname;
    this.last_name = lname;
}

//add property/value in "PERSON" constructor after creattion construtor using prototype
Person.prototype.mobile = '789456132';

//add method in "PERSON" constructor after creattion construtor using prototype
Person.prototype.greet = function(){
    console.log('Hello, ' +this.first_name +" " +this.last_name +" " +this.mobile);
}

// call constructor
var profile1 = new Person('Maci','Hony');
profile1.greet();

//check prototype added list
console.log(profile1.__proto__);


