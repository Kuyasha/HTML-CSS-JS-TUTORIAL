//1)ARITHMETIC OPERATORS (+,-,*,/,%,**,++,--)
console.log(10+2);//12
console.log(13/2);//6.5
console.log(13%2);//1
console.log(0/0); //output=NaN
console.log(1/0); //Infinity
console.log(Infinity*0);//NaN
console.log(2*3);//6
console.log(13%NaN);//NaN
console.log(13%Infinity);//13

//unary operators
let a=24;
console.log(a++);//24 prints first then increment(a=25)
console.log(++a);//26, increment(a=26) first then prints.

//let i=11;
//let j=--(i++);
//console.log(j); //op=>Error as JS does not allow nesting on increment/decrement

let a1="4";
let b1="6";
console.log(++a1); //5
console.log(b1--); //6
const result=++a1 + b1--;
console.log(result);//11
console.log(typeof result);//number





//2)ASSIGNMENT OPERATORS (=,+=,-=,*=,/=,%=,**=)
let b=10; //here we are assigning value to b.
console.log(b+=2);//12
console.log(b*=2);//24





//3)COMPARISON OPERATORS (<,>,<=,>=,==,!=,===,!==)
console.log(5>3); //true
console.log(5<1);//false
console.log(5!=8); //true
console.log("5"<"20");// false (first string 5 is compared with 2 only not 20)

//== operator (EQUALITY OPERATOR)
console.log(1==1);//true
console.log('1'==1);//true
console.log(1!='1');//false
console.log(undefined==null);//true

//=== operator(STRICT EQUALITY OPERATOR)
console.log(1==='1');//false
console.log(1!=='1');//true
console.log(undefined===null); //false
console.log("hello"!=="Hello");//true
console.log("hello"!="Hello");//true





//4)LOGICAL OPERATORS (&&,||,!)

//a)logical AND(&&) [(AND operator returns us last truthy value and first false)]
console.log(1 && 5); //5 (returns last truthy value when both are true)
console.log(0 && false);//0(returns first falsy value when both are false)
console.log(1 && 0);//0 (returns falsy value when one true and one false)
console.log(true && true); //true

//b)logical OR(||) [(OR operator returns us first truthy value and last false)]
console.log(1 || 5); //1 (returns first truthy value when both are true)
console.log(0 || null);//null (returns last falsy value when both are false)
console.log(0 || 1);//1 (returns truthy value when one true and one false)
console.log(0 || false || ''); //returns nothing as it returns empty string
console.log(0 || false || '' || null); //null
console.log(0 || "hello" || true); //hello (0 is falsy value so first truthy value is hello)

//c)logical NOT(!) 
console.log(!0); //true (because 0 in JS=false; so !0=true)
console.log(!1);//false





//5)BITWISE OPERATORS (>>,<<,&,|,^,~)
//Exactly same as in other languages


