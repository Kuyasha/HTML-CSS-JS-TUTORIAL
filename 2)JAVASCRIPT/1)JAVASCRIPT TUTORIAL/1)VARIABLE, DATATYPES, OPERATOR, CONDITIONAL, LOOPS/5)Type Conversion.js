//[Numbers in yellow represents number and numbers in white represents 
// string]


//1)String() method
console.log(String(100));//prints 100 in white which represents string.
console.log(100); //prints 100 in yellow which represents number.

console.log(String(true));//true in white represents string
console.log(true);//true in yellow represents boolean
console.log(String(null));//null in white represents string
console.log(String(undefined));//undefined in white represents string


//2)toString() method [gives error in case of null,undefined etc]
console.log((123).toString());//123 in white
//console.log(null.toString());//TypeError: Cannot read properties of null (reading 'toString')


//3)Number() method
console.log(Number('25'));//25 in yellow represents number.
console.log(Number('Kuyasha'));//NaN  
console.log(Number(true));//1
console.log(Number(false));//0


//4)Unary + Operator (converts a string to number)
let a="134";
console.log(+a);//134 in yellow represents number

let b="125Kuyasha";
console.log(+b);//NaN


//5)parseInt()
console.log(parseInt('12354'));//12354
console.log(parseInt('12354ADF'));//12354 (ADF will not print and will not give NaN as output)
console.log(parseInt('123.45'));//123 (it strictly prints integer only)


//6)parseFloat()
console.log(parseFloat('125.859'));//125.859 in yellow as number
console.log(parseFloat('125.859vfr'));//125.859


//7)Boolean()  [any number,string etc will return true and 
//empty string,null,undefined,false will return false]
console.log(Boolean(100));//true
console.log(Boolean("aa"));//true
console.log(Boolean(true));//true
console.log(Boolean(false));//false
console.log(Boolean(""));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false





















