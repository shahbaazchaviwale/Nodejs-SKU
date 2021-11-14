
const bool = true;
(function(){
    try {
        if(bool){
            throw new TypeError('Condition true!!');
        }
      } catch (e) {
        console.log(e instanceof TypeError)  // true
        console.log(e.message)               // "Hello"
      
      }
})()