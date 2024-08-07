//map() fn=> go through each and every element of the array and manipulate
//it.It does not modify the original array;hence it will create a new arr. 

//Example-1 (METHOD-1)
const inputs_1=[2,3,4,5];
const cubicArray=inputs_1.map(cube); //cube function is defined separately
                            //and is passed here.
function cube(currentElement,index,arr) //index,arr is optional
{
    return currentElement*currentElement*currentElement;
}

console.log(cubicArray);//cubicArray is the new modified array(its not a fn)
//[ 8, 27, 64, 125 ]




//Example-2 (METHOD-2)
const inputs=[2,4,6,8,7];  

const squaredArray=inputs.map(function (currentElement){  //anonymous fn(fn without any name) is passed here
     return currentElement * currentElement;
});
console.log(squaredArray); //[ 4, 16, 36, 64, 49 ]





//EXAMPLE-3 (METHOD-3 Using Arrow Functions)
const inputs_3=[1,2,3,4];
const fourthCubicArray=inputs_3.map(
    (num) => num*num*num*num
);
console.log(fourthCubicArray); 
//[ 1, 16, 81, 256 ] 



/*
//Example-4
let data=[2,3,5,7];
let newData=data.map();
console.log(newData);

//op=>TypeError
*/





