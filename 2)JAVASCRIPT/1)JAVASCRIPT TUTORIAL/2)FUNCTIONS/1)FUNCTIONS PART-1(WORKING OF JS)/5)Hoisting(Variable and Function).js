//1)VARIABLE HOISTING
//example-1
a=10;
console.log(a); //op=10
var a;

//example-2
console.log(x); //op=undefined
var x=40;




//2)FUNCTION HOISTING
//example-1
console.log(cube(3)); //op=27
function cube(n)
{
    return n*n*n;
}

//example-2
console.log(fac(5)); //op=> 120, as this is fn hoisting.
function fac(n)
{
    var ans=1;
    for(var i=1;i<=n;i++)
    {
        ans=ans*i;
    }
    return ans;
}





// 3)HOISTING ON FUNCTION EXPRESSION (we cant use fn hoisting when we have used fn expression.)
//Eg:1
console.log(factorial); /*op=>undefined
[Since we are using function expression, it will be hoisted as a variable
with undefined.*/

console.log(factorial(5));/*op=> TypeError, factorial is not a fn. 
[When we try to call the factorial function, it will give a type error as for
Javascript, it is just like any other variable.] */

var factorial=function fact(n)
{
    var ans=1;
    for(var i=1;i<=n;i++)
    {
        ans=ans*i;
    }
    return ans;
}

console.log(factorial); //op=>[Function: fact] (prints the whole function)
console.log(factorial(5)); //120
console.log(fact(5));//ReferenceError:fact is not defined.


//Eg:2
console.log(square(5));//op=> TypeError, square is not a fn.
var square=function(x){
    return x*x;
};
console.log(square(5));










