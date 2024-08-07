/*
reduce fn=>sum of all the elements,product of all the elements etc.

Syntax=>  reduce(callback,initial value) //initial value=>optional
          function callback(accumulator,currentValue,currentIndex,arr) //currentIndex,arr=>optional

accumulator=>its actually a variable and it will hold the final result.
     Initially, accumulator=initial value;
If we dont pass any initial value then,
                accumulator=currentValue;
*/


//Example-1 (SUM OF ALL THE ELEMENTS)
const inputs_1=[2,3,4,5,6];
//result=accumulator, num=currentValue, initial value=0, index=currentIndex
const sum_2=inputs_1.reduce((result,num,index)=>{
    result += num;
    console.log(index,result);//getting the sum at every index
    return result;
},0);
console.log(sum_2);
/* op=>
0 0
1 2
2 5
3 9
4 14
20
*/




//Example-2 (PRODUCT OF ALL THE ELEMENTS OF THE ARRAY)
const inputs_2=[2,3,4,5,6];
//result=accumulator,num=currentValue,initial value=1 for calculating products
// currentIndex and arr is not given as they are optional.
const product=inputs_2.reduce((result,num)=>{
    return result *= num
},1);

console.log(product);



//Example-3 (SUM OF ALL EVEN NUMBERS)
const inputs_3=[1,2,3,4,5,6]

const sumOfEven=inputs_3.reduce((result,num)=>{
    if(num%2===0){
        return result+=num
    }
    else{
        return result
    }
},0);

console.log(sumOfEven);




