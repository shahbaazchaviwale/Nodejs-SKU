//Funs are First-class in JAVASCRIPT
function fun_1(){
    console.log('call fun-1');
}
fun_1();
function fun_2(fn){
    fn();
}
//paassed fun_1 as argument
fun_2(fun_1);


//function expression
var fun_3 = function(){
    console.log("call fun_3");
}

fun_3();
fun_2(fun_3);


//Immediately Invoked Function Expression (IIFE)

(function(a){
    console.log('SUM : ', a + 2);
}(2));

(function(b){
    console.log('MUL : ', b * 2);
})(5);