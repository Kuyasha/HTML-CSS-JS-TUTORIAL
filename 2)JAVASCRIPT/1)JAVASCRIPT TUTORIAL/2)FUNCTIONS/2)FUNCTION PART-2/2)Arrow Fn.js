//NORMAL FUNCTION
var product=function(num1,num2){
    return num1*num2;
}
console.log(product(4,5));//20



//ARROW FUNCTION ===> arrow(=>) replaces the function keyword
                                                    
//Syntax-1 (function keyword is replaced with arrow)
var product=(num1,num2) => {
    return num1 * num2; //here we can skip the return.
};
console.log(product(4,5)); //op=>20



//Syntax-2 (The arrow function implicitly returns if there is a single line
//of code, but if you enclose the code within curly brackets, it will not
//return implicitly.)                                      
var sum=(num1,num2) => num1+num2;
console.log(sum(2,5)); //op=>7





// HOISTING OF ARROW FUNCIONS IS NOT ALLOWED
console.log(greet("Alice"));
const greet = name => `hello, ${name}!`; 
/* op=>ReferenceError: Cannot access 'greet' before initialization
[The following code snippet will result in an error because the arrow
function is a function expression, and we can’t invoke a function
expression before its declaration. ]   */