/*
Problem statement=>
Create a closure function that generates unique registration numbers in the
following format:

A_2023_1   // For first call
A_2023_2   // For second call
A_2023_3   // For third call

Requirements
The function generateID should take a parameter as a start value.
It should return a function which, when called each time, should generate
the next ID.

Input:
let getID = generateID(2)
getID()
getID()

Output:
A_2023_2
A_2023_3
*/

function generateID(start)
{
    return function id()
    {
        return `A_2023_${start++}`;
    };
}
  
const func = generateID(105);
console.log(func());//Output : A_2023_105
console.log(func()); // Output: A_2023_106