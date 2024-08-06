//RETURN VALUE OF A FUNCTION AND INVOKING A FUNCTION 
//1)
function squared(number){
    return number * number;
}
const sq5=squared(5);//saving the returned value of the fn inside sq5 variable
console.log(sq5); //25
const sq15=squared(15);
console.log(sq15);//225
const sq10=squared(10);
console.log(sq10);//100
const sq7=squared(7);
console.log(sq7);//49




//2)multiple return values
function getValues(){
    return 1,2,3;
}
var result=getValues();
console.log(result); //3
/* op=> When you use commas to separate values (return 1, 2, 3;),
JavaScript interprets it as the comma operator, which evaluates each
expression but only returns the value of the last expression. In this
case, the function is effectively returning only 3.
*/





//3)
function calculate(length,breadth)
{
    return length * breadth;
}
const area=calculate(5,5);
console.log(area); //25
