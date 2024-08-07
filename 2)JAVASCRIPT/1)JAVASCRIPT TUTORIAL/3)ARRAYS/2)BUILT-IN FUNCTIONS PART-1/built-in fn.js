
//1)length fn
const arr=[1,8,74];
console.log(arr.length);//op=>3






//----------------ADD ELEMENTS => PUSH, UNSHIFT ----------------------

const teams=["CSK","RCB","MI","LSG"];
//2)push method=>adds one or more elements to the end of the array
// and returns the new length of the array.                            
console.log(teams.push("GT"));//5 (returns length of the array after entering "GT")
console.log(teams);//op=>[ 'CSK', 'RCB', 'MI', 'LSG', 'GT' ]


//3)unshift method =>adds one or more elements to the beginning
//of the array and returns the new length of the array.
 console.log(teams.length);//5    
 console.log(teams.unshift("KKR","PS"));//7 
 console.log(teams);//[ 'KKR', 'PS', 'CSK', 'RCB', 'MI', 'LSG', 'GT' ]


// example on push
var a=[1,2,3,4];
var b=a.push(5,6);
console.log(b);//op=>6 //== console.log(a.push([5,6])) as we know push method return the new length of the array







 

//-------------REMOVE ELEMENTS => POP,SHIFT,SLICE,SPLICE------------------------------------------

const fruits=["Apple","Mango","Banana","Strawberry"];
//4)pop method=>remove the last element from the arr and return that element     
console.log(fruits.pop());//Strawberry (pop returns the popped element)
console.log(fruits); //[ 'Apple', 'Mango', 'Banana' ]         

var arr2=[];//=>pop() on an empty array returns undefined.
console.log(arr2.pop());//undefined



//5)shift method =>remove the first element from the arr and return that element.               
console.log(fruits.shift()); //Apple (shift also returns the removed element)
console.log(fruits);//[ 'Mango', 'Banana' ]



//6)slice() method =>
     //i)Removes element from the beginning of the array.
     //ii)Number of elements removed is mentioned inside slice() fn.
     //iii)Slice() fn returns a new array containing a portion of the original
//array after removing elements.
     //iv)Original array remains same after slice() fn;elements are sliced
//from original arr using slice() fn.
     //v)Negative indices can be used with the slice() method to extract
//elements from the end of an array. 
let arr1=[2,9,7,10,25,69,78,45];
console.log(arr1.slice());//op=>[2,9,7,10,25,69,78,45]; (no elememt is removed)
console.log(arr1.slice(2));//op=>[ 7, 10, 25, 69, 78, 45 ] (two elements 2,9 are deleted)
console.log(arr1.slice(-2));//op=>[78,45] (removes everything from the array
                            //except the last two integers)
console.log(arr1);//op=>[2,  9,  7, 10, 25, 69, 78, 45] (after slice() fn
//original array still remains the same)



//7)splice method=>
//     Syntax:- array.splice(start,deleteCount,item1,item2,item3,...itemN)
//     start=>index from where deletion will start
//     deleteCount=> Number of elements I want to delete
//     item1,item2,...itemN=>elements I want to insert
var arr2=[3,5,7,45,67];
console.log(arr2.splice(2,2,50,60));//op=>[7,45] returns the elements
//                                    (which are deleted) in array format.
console.log(arr2);//[3,5,50,60,67]

console.log(arr2.splice(0));//[3,5,50,60,67] (deletes all the elements starting
                              //from index=0)
console.log(arr2);//[]









//----------CHECK ELEMENT IS PRESENT OR NOT [INDEX_OF, INCLUDES]------------

//8)indexOf method =>used to return the first index at which
//the element is found in the array. 
const cities=["Kolkata","Delhi","Mumbai","Chennai","Bangalore","Kharagpur","Chennai","Mumbai"];  
console.log(cities.indexOf("Mumbai"));//2
console.log(cities.indexOf("Mumbai",3));//7 (3 represents start searching from index=3)
console.log(cities.indexOf("Pune"));//-1 (elememt which is not present in the cities array)

//9)includes() =>just returns the boolean value.Returns true if element is 
//present and returns false if not present.
console.log(cities.includes("Kolkata"));//true
console.log(cities.includes("Pune")); //false






//10)concat() METHOD=>returns a new array that combines two or more arrays.
const teams1=["India","Australia","New Zealand"];
const teams2=["SA","England","West Indies"];
const mergedTeams=teams1.concat(teams2);
console.log(mergedTeams);//op=>[ 'India', 'Australia', 'New Zealand', 'SA', 'England', 'West Indies' ]





//11)reverse method=>used to reverse the content of the array and return the
//new reversed Array.This reverse() method is not applicable for strings.
var arr6=[5,3,96,21,48,97];
arr6.reverse();
console.log(arr6);//[ 97, 48, 21, 96, 3, 5 ]






//--------------------split() , join() method-------------------------------
//12)split()
let str="Kuyasha";
let splitArray=str.split("");
console.log(splitArray);//op=>['K', 'u', 'y', 'a', 's', 'h', 'a' ]

//13)join()
let joinArray=splitArray.join("");
console.log(joinArray);//op=>Kuyasha






//14)sort() fn 
const city= ["Kolkata","Mumbai","Delhi","Chennai"];
city.sort(); //cities are sorted inalphabetical order
console.log(city);//op=>[ 'Chennai', 'Delhi', 'Kolkata', 'Mumbai' ]

const num1=[11,323,23,638,57];//(complicated;getting wrong output in case of 3 digits numbers)
num1.sort();
console.log(num1);//op=>[ 11, 23, 323, 57, 638 ]

const num2=[11,32,23,63,57];
num2.sort();
console.log(num2);//op=>[ 11, 23, 32, 57, 63 ]






/*
//toString method=>return the array in the form of a string;the
// string contains all the elements separated by comma.
var arr7=["kuyasha",98,54,309];
arr7.toString();
console.log(arr7);//['kuyasha',98,54,309]
*/






















