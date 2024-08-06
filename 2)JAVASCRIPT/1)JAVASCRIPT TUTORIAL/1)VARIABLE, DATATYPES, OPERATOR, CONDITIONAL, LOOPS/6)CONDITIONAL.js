// CONDITIONALS => [if,if-else,else-if,switch,ternary operator] 

//1)IF STATEMENT
let num1=2;
if(num1>0)
{
    console.log("POSITIVE");
}



//2)IF ELSE STATEMENT
let num2=-1;
if(num2>0)
{
    console.log("POSITIVE");
}
else
{
    console.log("NEGATIVE");
}



//3)ELSE IF
let a=0;
if(a>0)
{
    console.log("POSITIVE");
}
else if(a<0){
    console.log("NEGATIVE");
}
else{
    console.log("ZERO");
}




//4)SWITCH STATEMENT
//1)
const fruits=prompt("Enter the fruit name");
switch(fruits){
    case "Apple":
        console.log("its Apple");
        break;
    case "Kiwi":
        console.log("its Kiwi");
        break;
    case "Banana":
        console.log("its Banana");
        break;
    default:
        console.log("Its neither Apple nor Kiwi nor Banana");
        break;
}
console.log("outside switch");


//2)switch statement in Js without break and default statement
let x1=25;
switch(true)
{
    case (x1>10 && x1<20):
    {
      console.log("hhmbj");
    }
    case (x1>20 && x1<50):
    {
      console.log("hhmbvxs");
    }
}





//5)TERNARY OPERTOR
//Syntax=> Condition? (True) Expression : (False) Expression
//1)Check whether a number is even or odd
let num8=5;
num8 % 2 === 0?console.log("even"): console.log("odd");

//2)
let flag;
let num=flag ? 100 : 200;
console.log(num);
//op=>The ternary operator is mostly used while assigning values where value
//depend on some condition.Here the flag is not initialized, so it will have
//undefined as a value,and it will be equivalent to false in the ternary
//operator, so num will have 200 as a value.










//SOME MORE EXAMPLES
//Example-1
let num3=-2;
if(num3)
{
    console.log("True");
}
else{
    console.log("False");
}
//op=>true [As it is a number it will be true; only 0 will give false.
          //Empty string, undefined, null give false here.]


//Example-2
let num4=0; //0 gives false.
if(num4)
{
    console.log("True");
}
else{
    console.log("False");
}


//Example-3
let num5=""; //empty string gives false
if(num5)
{
    console.log("True");
}
else{
    console.log("False");
}


//Example-4
let num6=" "; //not empty string gives true.
if(num6)
{
    console.log("True");
}
else{
    console.log("False");
}


//Example-5
let num7=null; //null gives false
if(num7)
{
    console.log("True");
}
else{
    console.log("False");
}


//Example-6
let x=0;
if(x++)
{
    console.log("value of x is not zero");
}
else if(x==0)
{
    console.log("value of x is zero");
}
else{
    console.log("both are false");
}

  
