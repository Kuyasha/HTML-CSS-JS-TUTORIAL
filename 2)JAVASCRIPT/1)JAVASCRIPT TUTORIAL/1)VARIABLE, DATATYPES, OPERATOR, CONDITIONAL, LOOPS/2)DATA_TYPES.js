/*Data Types 
   1)7 primitive datatypes 
   2)object.
*/

/*  PRIMITIVE DATATYPES   */

//1)NUMBER (64 bit)
let num=10;
console.log(num);    //op=>10

console.log(typeof 20); //op=>number



//2)STRING
let firstName="Kuyasha";
let lastName='Das';
let nickName=`Tusi`;
console.log(typeof firstName); //op=>string  
console.log(typeof lastName);  //op=>string
console.log(typeof nickName);  //op=>string

const name="Kuyasha's book";
console.log(name); //op=>Kuyasha's book




//3)BOOLEAN
let bool=false;
console.log(typeof bool); //op=>boolean



//4)UNDEFINED  =>define a var but not assigning value to it.
let b;
console.log(b);    //op=>undefined.
console.log(typeof b); //op=>undefined.




//5)NULL (datatype of null=object) =>set null value to variable.
let address = null;
console.log(address);   //op=>null.
console.log(typeof address); //op=>object
console.log(typeof null); //op=>object


//6)SYMBOL



//7)BIGINT
let num1=10n;
console.log(typeof num1); //op=>bigint








//TypeOf Operator --->to find out the type of variable
console.log(typeof(10)); //1)number

console.log(typeof(true)); //2)boolean

console.log(typeof("aaa")); //3)string
console.log(typeof("-1"));//string

b=null;
console.log(typeof(null)); //4)type of null=object

let b1;
console.log(typeof b1);//5)undefined

let myBigInt=BigInt(9007199254740991);
console.log(typeof myBigInt);//6)bigint

let mySymbol=Symbol("mySymbol");
console.log(typeof mySymbol);//7)symbol


console.log(typeof(Infinity));//type of Infinity=number
console.log(typeof(NaN)); //type of NaN=number











/* INTERESTING FACTS ABOUT DATATYPE IN JS */

//1)MAXIMUM MINIMUM number that can be stored at js
console.log(Number.MAX_VALUE);  //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MAX_VALUE*10); //Infinity



//2)INFINITY
let a=1/0;
console.log(a);  //Infinity

a=2/Infinity;
console.log(a);  //0

a=Infinity+1;
console.log(a);  //Infinity

a=Infinity-1;
console.log(a);  //Infinity

a=Infinity*1;
console.log(a);  //Infinity

a=Infinity/Infinity;
console.log(a);  //NaN (Not a Numbers)

console.log(Infinity*0);//NaN

console.log(13%Infinity);//13





//3)NAN=> not a number
console.log(Math.sqrt(-1));//NAN , as sqrt root of negative nos does not exists.
console.log(13%NaN);//NaN

let c="A";
console.log(65-a);//NAN, as log(65-65)=log(0) does not exists.




//4)MATH
console.log(Math.pow(10,2)); //100
console.log(Math.pow(10,100)); //1e+100
console.log(Math.pow(10,1000)); //Infinity, as this is beyond the number that can be stored in js.

