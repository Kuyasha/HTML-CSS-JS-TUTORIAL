
//1)find() function:-
//========>The find() method returns the first element in an array
// that satisfies the provided testing function. If a matching element is
// found, it is returned; otherwise undefined is returned.
//callback is passed as only argument.

const inputs=[22,13,77,15,65,98,76,44,55,65];

//a)
const find1=inputs.find((num) => num===65);
console.log(find1);
//op=>65

//b)
const find2=inputs.find((num) => num>65);
console.log(find2);
//op=>77 (the first elemnt which is greater than 65 is 77)

//c)
const find3=inputs.find((num) => num===64);
console.log(find3);
//op=>undefined






//2)findIndex()
//=====>The findIndex() method returns the index of the first element in
// an array that satisfies the provided testing function. 
//If a matching element is found, its index is returned; otherwise, `-1` is
// returned.
//callback is passed as only argument

const inputs_=[22,13,77,15,65,98,76,44,55,65];

//1)
const find4=inputs.findIndex((num) => num>65);
console.log(find4);
//op=>2 
//(index number of first number which is greater than 65 is
// 2(index of 77))

//2)
const find5=inputs.findIndex((num) => num===64);
console.log(find5);
//op=>-1 (element not present)







