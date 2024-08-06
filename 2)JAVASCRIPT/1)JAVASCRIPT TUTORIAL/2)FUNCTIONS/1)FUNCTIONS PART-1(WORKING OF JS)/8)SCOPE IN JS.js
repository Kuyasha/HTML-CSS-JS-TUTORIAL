//Global
//Functional/Local
//Block (introduced in ES6)



//1)GLOBAL SCOPE-->Variable is defined globally not in any fn,so it can be
//used anywhere in the code.   
var i=10;
function abc()
{
    console.log(i);
}
console.log(i);//10
abc();//10




//2)FUNCTION/LOCAL SCOPE-->Variable is defined only within fn,so it is accessible
//only within that fn.          
var i=19;
function x()
{
    var j=67;
    console.log(i); //op=19
    console.log(j); //op=67
}
x(); //Prints 19 67 
console.log(i);//o/p=>19
//console.log(j);  // op=>reference-error as j is not accessible outside fn.  




//3)BLOCK SCOPE  ----->Variables declared with let and const within
//a block(eg:for loop or if statement etc).They can only be accessed within
//that block only. 
function foo(){
    if(true){
        let blockVar='I am in the block scope';
        console.log(blockVar); //op=>I am in the block scope
    }
    console.log(blockVar);//error=>blockVar is not defined
}





//CODE EXAMPLE-1
var varNum=10;
let letNum=20;
const constNum=30;

function print(){
    var varLocal=10;
    let letLocal=20;
    const constLocal=30;
    console.log(`inside fn local var: ${varLocal} ${letLocal} ${constLocal}`);
    console.log(`inside fn global var: ${varNum} ${letNum} ${constNum}`);
}
print();
console.log(`outside fn global var: ${varNum} ${letNum} ${constNum}`);
console.log(`outside fn local var: ${varLocal} ${letLocal} ${constLocal}`);
/*
op=>
inside fn local var: 10 20 30
inside fn global var: 10 20 30
outside fn global var: 10 20 30
e:\WEB DEVELOPMENT\3)JAVASCRIPT\3)FUNCTIONS\GLOBAL AND FN SCOPE.js:111
console.log(`outside fn local var: ${varLocal} ${letLocal} ${constLocal}`);
                                     ^

ReferenceError: varLocal is not defined
*/





