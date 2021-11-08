//****************************************************************** */
/**
 * REVEALING module pattern:
 * exposing only the properties and methods you want via an returned object
 * ----> its very common and clean way to  structure & protect code within module
 */
//****************************************************************** */

const txt = 'Hello Good Morning';

function RMP(){
   console.log(txt);
}

module.exports ={
    rmp : RMP
}