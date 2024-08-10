//EXTRACTING DUPLICATE ELEMENTS
/* 
Problem Statement=>Write a fn to get all the duplicate elements from an
array.This fn should return an array of duplicate elements.
*/

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){
  const duplicate=[];
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]===arr[j] && !duplicate.includes(arr[i]))
        {
            duplicate.push(arr[i]);
        }
    }
  }
  return duplicate;
}    
console.log(findDuplicate(arr)); // [4,1]