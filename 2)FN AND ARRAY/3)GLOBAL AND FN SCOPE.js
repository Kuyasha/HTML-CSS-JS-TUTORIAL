//GLOBAL SCOPE-->Variable is defined globally not in any fn
var i=10;
function abc()
{
    console.log(i);
}
console.log(i);
abc();


//FUNCTION SCOPE-->variabe is definedd only within fn
var i=0;
function x()
{
    var j=1;
    console.log(i); //op=0
    console.log(j); //op=1
}

//console.log(j); //op=error as j is not accessible outside fn
x(); 


//DIFFERENT VARIABLES WITH SAME NAME IN DIFFERENT SCOPE
var name="x";//global scope
function demo()
{
    var name="fn";
    console.log(name);  //this will print fn(innername) as that exists in the current scope.
}

demo();
console.log(name); //op=x; as this will print global.
