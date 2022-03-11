//FN WITHOUT PARAMETERS
function showAlert()  //camelcase-->1st word is all small;from 2nd word 1st letter is capital.
{
    console.log("Hey!!");
}
//fn calling
showAlert();



//FN WITH PARAMETERS
function show(msg)
{
    console.log(msg);
}
//fn calling
show("Hello!!");


//ANOTHER EXAMPLE OF FUNCTION
function sum1(a,b)
{
    return a+b;
}
var result1=sum1(4,6);
console.log(result1);


//PASSING FEWER ARGUEMENTS---->prints NaN
function sum2(a,b)
{
    return a+b;
}
var result2=sum2(4);
console.log(result2); //-->op=NaN


//PASSING MORE ARGUEMENTS--->extras will be ignored
function sum3(a,b)
{
    return a+b;
}
var result3=sum3(4,6,9);
console.log(result3);//--->op=4+6=10


//ARGUEMENTS OBJECT
function printAll()
     { 
    for (var i = 0; i < arguments.length; ++i)
         {
            console.log(arguments[i]);
         } 
     }

    printAll('mango', 'apple'); // Prints - mango apple 
    printAll('fire', 'water', 'ice', 'gas'); // Prints - fire water ice gas


//DEFAULT PARAMETERS
function findInterest(p, r = 5, t = 1) //r and t values are added as bydefault
      { 
    console.log("Interest over", t, "years is:", (p * r * t) / 100); 
      } 
    findInterest(1000); // Prints - Interest over 1 years is: 50 
    findInterest(1000, 7); // Prints - Interest over 1 years is: 70 
    findInterest(1000,8,2);//prints interest over 2 years is :160

//REST PARAMETERS
function addAtLeastThree(a, b, c, ...numbers) 
         { 
             var sum = a + b + c; 
             for (var i = 0; i < numbers.length; ++i) 
                          { 
                        sum += numbers[i];
                           }
             return sum; 
        } 
        
console.log(addAtLeastThree(10, 20, 30, 40, 50)); //op=150





