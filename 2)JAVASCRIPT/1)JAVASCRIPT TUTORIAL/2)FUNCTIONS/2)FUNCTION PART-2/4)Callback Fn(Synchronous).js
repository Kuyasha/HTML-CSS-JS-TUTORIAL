/*Callback Function =>Function as a argument/parameter is passed inside
another function.                                                              */

//Example-1
function greet(wish){
    console.log(`${wish()},Welcome to the Javascript Course`);
}                     //wish() is callback fn parameter.

function sayHi(){
    return "Hi!";
}

function sayHello(){
    return "Hello!";
}

function goodMorning(){
    return 'Good Morning!';
}

greet(sayHi);//Hi!,Welcome to the Javascript Course
greet(sayHello);//Hello!,Welcome to the Javascript Course
greet(goodMorning);//Good Morning!,Welcome to the Javascript Course






//Example-2  (getting error output,will check while revising)
function abc(a,b,compute)
{
    return compute(a,b);
}

function add(a,b)
{
  return a+b;
}
function multiply(a,b)
{
  return a*b;
}

console.log(abc(10,5,add));//15
console.log(abc(10,5,multiply));//50




//Example-3
var factorial=function fact(n)
{
    var ans=1;
    for(var i=1;i<=n;i++)
    {
        ans=ans*i;
    }
    return ans;
}
function ncr(n,r,factorial)
{
    return factorial(n);
}
console.log(ncr(5,2,factorial));





//EXAMPLE-4
//SQUARE AND CUBIC USING CALLBACK
function operation(input,callback){
    const output=[];
    for(let num of input)
    {
        output.push(callback(num));
    }
    return output;
}

function square(number){
    return number*number;
}
function cube(number){
    return number*number*number;
}

const inputs=[2,3,4,5,6,7,8,12,1,4,16];
console.log(operation(inputs,square));
console.log(operation(inputs,cube));

/*
[
    4,  9,  16, 25, 36,
   49, 64, 144,  1, 16,
  256
]
[
    8,  27,   64,  125,
  216, 343,  512, 1728,
    1,  64, 4096
]
*/