//FUNCTION DECLARATION/DEFINITION AND FUNCTION EXPRESSION

//1)Function Declaration/Definition
function fac(n)
{
    var ans=1;
    for(var i=1;i<=n;i++)
    {
        ans=ans*i;
    }
    return ans;
}
console.log(fac(5)); //op=>120




//2)Function Expression =>Function Expression is nothing but assigning the
//fn to a variable,here the variable is factorial .                                         
const factorial=function fact(n)
{
    var ans=1;
    for(var i=1;i<=n;i++)
    {
        ans=ans*i;
    }
    return ans;
}
console.log(factorial(5)); //prints 120

console.log(factorial); //prints the whole fn. o/p=>[Function:fact]

//console.log(fact(4));//gives error as fact is not defined.






//3)Anonymous Fn
var facto=function(n)
{
    var ans=1;
    for(var i=1;i<=n;i++)
    {
        ans=ans*i;
    }
    return ans;
}
console.log(facto); //op=> [Function: facto]
 //in case of this unnamed fn,output takes variable name.
console.log(facto(4)); //24



//4)Passed By Value
function abc(b){
    b=30;
    console.log(b);
}
const a=90;
abc(a);//30 [here a=90 is passed to the function but its prints 30 as
            // b=30 is modified inside function]
console.log(a);//90  [As the argument a is integer(primitive); changes made
                     // inside fn(b=30) does not reflect here]

                  
//5)Passed By Reference
function abc2(arr1){
    arr1[1]=50;
    console.log(arr1);
}
var arr2=[10,20,30];
abc2(arr2); //[10,50,30]
console.log(arr2);//[10,50,30]

