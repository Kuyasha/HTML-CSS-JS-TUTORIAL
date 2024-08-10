//MERGE SORT (MERGE TWO ARRAYS BY REMOVING ALL THE DUPLICATES)
//Write a javascript program to merge two arrays while removing all the
//duplicates from the array.



arr1 = [1,2,4,5,7];
arr2 = [3,4,6,7,9,0];
function mergeArray(arr1,arr2){
    const mergedArray=arr1.concat(arr2);
    const mySet=new Set();
    for(i in mergedArray)
    {
        mySet.add(mergedArray[i]);
    }
    return mySet;
}
console.log(mergeArray(arr1,arr2));
//Output : [1,2,4,5,7,3,6,9,0]