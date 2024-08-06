//1)CREATING A FN WITH AND WITHOUT PARAMETERS

//EXAMPLE-1
//a)Without Parameters
function greetUser1(){
    console.log("Hello, Welcome to the session");
}
greetUser1();//Fn calling
greetUser1();
/*
op=>
Hello,Welcome to the session
Hello,Welcome to the session
*/

//b)With Parameters
function greetUser2(username){
    console.log(`Hello ${username}, Welcome to the session`);
}
greetUser2("Kuyasha");
//op=>Hello Kuyasha, Welcome to the session



//EXAMPLE-2
//a)Without Parameter
function showAlert()//camelcase-->1st word is all small,from 2nd word 1st letter is capital.
{
    console.log("Hey!!");
}
showAlert(); //op=>Hey!!

//b)With Parameters
function showAlert2(msg)
{
    console.log(msg);
}
showAlert2("Hello!!"); //Hello!!



//EXAMPLE-3 =>Sum of two numbers (Number of parameters=2)
//method-1
function sum1(num1,num2)
{
    return num1+num2;
}
var result1=sum1(4,6);
console.log(result1); 
//op=>10

//method-2
function sum2(num1,num2){
    console.log(`Sum of the numbers is: ${num1 + num2}`); //using dollar adds the number
}
sum2(4,6);  //op=>Sum of the numbers is: 10

//method-3 =>Concatenation of two number
function sum3(num1,num2){
    console.log("Sum of the numbers is: " + num1 + num2);
}
sum3(4,5); 
//op=>Sum of the numbers is: 45







//2)PASSING FEWER ARGUEMENTS---->prints NaN
function sum4(a,b)
{
    return a+b;
}
var result2=sum4(4);
console.log(result2); 
//-->op=NaN




//3)PASSING MORE ARGUEMENTS--->extras will be ignored
function sum5(a,b)
{
    return a+b;
}
var result3=sum5(9,6,5);
console.log(result3);
//--->op=9+6=15




//4)DEFAULT PARAMETERS (this is needed when user forget to pass any argument)
function findInterest(p, r = 5, t = 1) //r and t values are added as bydefault
    { 
      console.log(`Interest over ${t} years is: ${(p * r * t)/100}`); 
    }
findInterest(1000); //op=> Interest over 1 years is: 50 
findInterest(1000, 7); //op=> Interest over 1 years is: 70 
findInterest(1000,8,2);//op=> Interest over 2 years is: 160



//5)REST PARAMETERS
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




//6)ARGUEMENTS OBJECT
function printAll()
     { 
       for (var i = 0; i < arguments.length; ++i)
         {
            console.log(arguments[i]);
         } 
     }
printAll('mango', 'apple'); //op=> mango apple 
printAll('fire', 'water', 'ice', 'gas'); //op=> fire water ice gas






