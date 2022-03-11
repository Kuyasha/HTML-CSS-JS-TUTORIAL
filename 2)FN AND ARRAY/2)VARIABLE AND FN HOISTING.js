//VARIABLE HOISTING
console.log(a); //op=undefined
var a=10;

//FN HOISTING
console.log(cube(3)); //op=27
function cube(n)
{
    return n*n*n;
}


//we cant use fn hoisting when we have used fn expression.
//if we use fn expression and fn hoisting then result will be undefined
console.log(b); //op=undefined
var b=function()
{
    console,log("Inside Fn");
}
