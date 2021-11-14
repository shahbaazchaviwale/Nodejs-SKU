//create empty object

var Person = {
    firstname: '',
    lastname: '',
    greet: function(){
        return this.firstname+ ' ' +this.lastname
    }
}

const getDetails1 = Object.create(Person);
getDetails1.firstname = 'Shahbaz';
getDetails1.lastname = 'chaviwale';
console.log(getDetails1.greet());

const getDetails2 = Object.create(Person);
getDetails2.firstname = 'Naihal';
getDetails2.lastname = 'chaviwale';
console.log(getDetails2.greet());


