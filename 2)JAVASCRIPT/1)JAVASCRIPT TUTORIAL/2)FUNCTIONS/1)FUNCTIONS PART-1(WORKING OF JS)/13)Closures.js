/*
//CODE-1 (Without Closure)
let a='Global';

function outerPrint(){
  let b='OuterPrint';

  function innerPrint(){
    let c='InnerPrint';
    return `${a} -> ${b} ->${c}`;
  }
  const show=innerPrint();
  console.log(show);
}
outerPrint();//Global -> OuterPrint ->InnerPrint (got this op due to scope chaining)
*/




//CODE-2 (With Closure Concept)
//Closures remembers the lexical environment; even if the variable or fn
//is popped out from the call stack.
let a='Global';

function outerPrint(){
  let b='OuterPrint';

  return function innerPrint(){ //we can also return innerPrint from here
    let c='InnerPrint';
    return `${a} -> ${b} ->${c}`;
  }
  //return innerPrint; //instead of calling innerPrint, we are returning
}                     // innerPrint from outerPrint() fn                 
const show=outerPrint();
console.log(show);//op=>[Function: innerPrint]

//To print the values of innerPrint
console.log(show());//Global -> OuterPrint ->InnerPrint




//CODE-3
/*
Create a closure function that generates unique registration numbers in the following format:
A_2023_1   // For first call
A_2023_2   // For second call
A_2023_3   // For third call

Requirements:-
The function generateID should take a parameter as a start value.
It should return a function which, when called each time, should generate
the next ID.

let getID = generateID(2)
getID()
getID()

Output:
A_2023_2
A_2023_3
*/

function generateID(start) {
    let count = start;
    return function id() {
      return `A_2023_${count++}`;
    };
  }

const func = generateID(99);
console.log(func());//Output : A_2023_99
console.log(func()); // Output: A_2023_100

