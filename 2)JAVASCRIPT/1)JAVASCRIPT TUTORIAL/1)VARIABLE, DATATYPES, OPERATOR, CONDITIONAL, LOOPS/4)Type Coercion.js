//TYPE COERCION=>in case of "+";there is no type conversion(eg:string remains string)
console.log("hello" + "world");//helloworld (no space between hello and world)
console.log("Kuyasha"+" "+"Das"); //Kuyasha Das
console.log("hello" + 2);  //hello2
console.log(1+1);//2

let num="1"+1;
console.log(num);  //11
console.log(typeof num);//string


//But for (-,*,/,> etc) automatic type conversion occurs(converts strings to numbers).
let num2='55' - 10;
console.log(num2);  //45, automatic type conversion from string to integer.
console.log(typeof num2); //number

console.log('2' * 5);  //10
console.log('1'/2);  //0.5
console.log('1'>0);  //true.

//(typeof string/number)=number
let x='5'+5; //string
let y='10'-5;//number
let z=x/y; //number
console.log(typeof z);//number

//Type Coercion with Boolean
console.log(true+true); /*When true is used in a numeric context, 
                it is automatically converted to the number 1.
                Therefore, true + true is equivalent to 1 + 1,which is 2.*/

