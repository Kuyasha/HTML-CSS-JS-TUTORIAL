
//DIFFERENT VARIABLES WITH SAME NAME IN DIFFERENT SCOPE
var name="x";//global scope variable
function demo()
{
    var name="fn";
    console.log(name);  //this will print "fn" as that exists in the current scope.
}
demo(); //op=>"fn"
console.log(name); //op=> x , as this will print global.



//CODE EXAMPLE-1
var x="global";
function outer()
{
    var x="basic";
    var y=34;
    function inner()
    {
        var z=405;
        var x="adv";
        console.log(x); //Prints adv
    }
    inner();  //Prints adv
    console.log(x); //Prints basic
} 
outer(); //op=> adv    basic
console.log(x);//op=> global (as out of both inner and outer fn.)



//CODE EXAMPLE-2
function a()
{
    console.log("Inside a");
    function b()
    {
        console.log("Inside b");
    }
}
a();
//op=>Inside a




//CODE EXAMPLE-3
var a=10;
let b=20;
const c=30;

function print(){
    var a='ten';
    let b='twenty';
    console.log('**** Inside print Function ******');
    console.log(a,b,c); //ten twenty 30
    console.log('******************');

    function innerPrint(){
        var a='inner10';
        console.log('**** Inside innerPrint Function *****');
        console.log(a,b,c); //inner10 twenty 30
    }
    innerPrint();
}

console.log(a,b,c); //10 20 30
print();
//op=>
//10 20 30
//**** Inside print Function ******
//ten twenty 30
//******************
//**** Inside innerPrint Function *****
//inner10 twenty 30
 


