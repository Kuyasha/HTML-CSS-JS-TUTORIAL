//FOR LOOP
var arr=[2,3,4,5,6,7];
for(var i=0;i<=arr.length;i++)
{
    console.log(arr[i]);
}



//FOR EACH METHOD
var arr2=[5,8,9,8];
function print(element) //this fn can have two more optional arguements-->index and arr2
{
    console.log(element);
}
arr2.forEach(print); //just pass the fn name