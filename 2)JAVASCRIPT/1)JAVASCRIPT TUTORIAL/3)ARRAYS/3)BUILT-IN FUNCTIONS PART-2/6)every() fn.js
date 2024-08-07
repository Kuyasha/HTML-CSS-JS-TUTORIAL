
//1) every: The every function tests whether all elements in an array
//pass a specific condition defined by a provided function.
//It returns a boolean value indicating if all elements satisfy the 
//condition.

const numbers = [2, 4, 6, 8];
const allEven = numbers.every(function(number) {
return number % 2 === 0;
});
console.log(allEven); 
// Outputs: true


const allOdd = numbers.every(function(number) {
    return number % 2 !== 0;
});
console.log(allOdd);
// Outputs: false
