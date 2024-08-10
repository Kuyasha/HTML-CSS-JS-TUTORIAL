// DELETE ALL THE OCCURRENCES OF AN ELEMENT
/*
Create a fn to delete all the occurrences of an element in an array.
Given an array arr[] and an element x.
*/

let arr = [25,56,59,56,96,56];
let ele = 56;
/* Incorrect code
function deleteOccur(arr,ele){
    for(let i=0;i<arr.length-1;i++)
        {
            if(arr[i]===ele)
                {
                    arr.splice(i,1);
                }
        }
    return arr;
}
*/
//Corect one (loop should start from last)
function deleteOccur(arr,ele){
    for(let i=arr.length;i>=0;i--)
        {
            if(arr[i]===ele)
                {
                    arr.splice(i,1);
                }
        }
    return arr;
}

console.log(deleteOccur(arr,ele));