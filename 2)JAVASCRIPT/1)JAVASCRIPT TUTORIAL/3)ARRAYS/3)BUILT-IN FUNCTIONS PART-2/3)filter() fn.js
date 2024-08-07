/*
filter=> this function gives a new array after filtering certain conditions.
          This fn takes only one argument that is callback.
*/

 
const inputs=[4,10,0,false,null,2,'',-3,-2];
console.log(inputs);


//1)Eliminate all the negatives from the input array.
//using normal fn
const positives=inputs.filter(noNegative);
function noNegative(num){
    return num>0;
}
console.log(positives);
//op=>[ 4, 10, 2 ]


//2)Eliminate all positives from inputs array
//using arrow fn
const negatives=inputs.filter( (num)=>num<0 );
console.log(negatives);
//op=>[ -3, -2]


//3)Eliminate all falsy values from inputs array
const noFalsy=inputs.filter(Boolean);
console.log(noFalsy);
//op=>[ 4, 10, 2, -3, -2 ]