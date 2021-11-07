// by value
function change(b){
    return b =2;
}
var a = 1;

console.log('b =>', change(a));
console.log('a =>', a);

// by reference
function changeObject(d){
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 ={};
changeObject(c);
console.log(c);