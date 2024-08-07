/*            PURE FUNCTIONS
Pure Fn=> returns same output for same set of inputs;output will not be 
manipulated by any external factor.Output is predictable.            */

//Example of Pure Fn [here return value completely depended on input]
function calculate(num1,num2)
{
    return num1 * num2;
}
console.log(calculate(4,6));//24


  



/*            IMPURE FUNCTIONS 
Impure Fn=>does not return same output for same set of inputs;output will be 
manipulated by any external factor.Output is unpredictable.

//Example of Impure Fn [here return value not completely depended on input;
//it depends on outside factor discount also]       */
let discount=25;
function calculateDis(price){
    discount=discount-5;
    return price-discount;
}
console.log(calculateDis(50));