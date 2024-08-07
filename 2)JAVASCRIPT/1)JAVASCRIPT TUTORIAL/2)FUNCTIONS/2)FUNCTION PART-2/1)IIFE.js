/*  IMMEDIATELY INVOKED FUNCTION EXPRESSION
Function expressions which are immediately invoked;as soon as they are
created,they are invoked. IIFE is actually an anonymous function*/

//1)without parameters
(function (){
    console.log("IIFE");
})();
//op=>IIFE


//2)with parameters
(function (a,b){
    console.log(a ** b);
})(4,2);
//op=>16




//MORE EXAMPLES ON IIFE
//1)
(function() {
    var message = 'Hello, world!';
    function displayMessage() {
       console.log(message);
    }
    displayMessage();
})();
//op=>Hello, world!
    


//2)
const user=(function(){
    //object of this fn
    const userData={
        userName: "John",
        userAge: 20,
    }

   function getName(){
    console.log(userData.userName);
   }
   function updateAge(age){
    console.log(userData.userAge + age);
   }
   
   return {getName,updateAge};
}) ();

console.log(user);
//op=>{ getName: [Function: getName], updateAge: [Function: updateAge] }

user.getName();//op=>John

user.updateAge(3);//op=>23

console.log(user.userData);//op=>Undefined [As userData is not returned from the fn]



//3)
let result=(() => {
    let x=5;
    return () => {
        x += 1;
        return x;
    };
}) ();
console.log(result());//op=>6
console.log(result);//op=>[Function (anonymous)]



//4)
var x=10;
(function (){
    console.log(x);
})();
//op=>10
/*Although we can’t access the variables declared in IIFE , but IIFE has
access to the outer scope and can access the variable declared in the outer
scope.]
*/
