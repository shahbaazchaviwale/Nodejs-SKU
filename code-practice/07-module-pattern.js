const greet1 = require('./module-pattern/01-overriding-module');
greet1();

// use in 2 ways
const greet2 = require('./module-pattern/02-add-object-with-module');
greet2.greet2();
//require with object call
const greet2_0 =  require('./module-pattern/02-add-object-with-module').greet2;
greet2_0();

//use module with constructor
const greet3 = require('./module-pattern/03-module-with-constructor');
greet3.greet3Method();
greet3.greet3Prop = 'changed the value';

const greet3_0 = require('./module-pattern/03-module-with-constructor');
greet3_0.greet3Method();

// use construtor pattern module but here will avoid require variable use multiple time
// as we added "new" object here itself

const Greet4 = require('./module-pattern/04-module-with-constructor-no-new-object');
const objGreet = new Greet4();
objGreet.greet4Method();
