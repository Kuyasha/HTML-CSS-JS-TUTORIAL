//REVERSE STRING

//METHOD-1 (USING LOOP)
/*function reverseString(str){
    let newString="";
    for(let i=str.length-1;i>=0;i--)
    {
        newString += str[i];
    }
     return newString;
}
    console.log(reverseString("Hello"));
*/




//METHOD-2 (USING BUILT-IN FN=>SPLIT,REVERSE,JOIN)
function reverseString(str){
    let splitString=str.split("");//[ 'h', 'e', 'l', 'l', 'o' ]
    let revArray=splitString.reverse();//[ 'o', 'l', 'l', 'e', 'h' ]
    let joinArray=revArray.join(""); //olleH
    return joinArray;
}
console.log(reverseString("hello"));



