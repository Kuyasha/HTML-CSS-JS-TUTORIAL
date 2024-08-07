/* -----1) CREATE ARRAY -----*/
//1)Using Square Brackets.
const arr1=[];//empty array
console.log(arr1);//op=>[]

const arr2=[10,"kuyasha",97,54,34,{liquid:"water"}]; //arr can contain diff types of values,it is heterogeneous.
console.log(arr2); //op=>[10, 'kuyasha', 97, 54, 34, { liquid: 'water' }]


//2)Using Array Objects/Constructor
const arr3=new Array();//empty array
console.log(arr3); //op=>[]

const arr3_=new Array(3);//empty array
console.log(arr3_); //op=> [<3 empty items>]

let N;
const arr4=new Array(N);//N is the length of array
console.log(arr4); //op=>[undefined]

const arr5=new Array(10,"coffee",97,54,34,{liquid:"water"});
console.log(arr5);//op=>[10, 'coffee', 97, 54, 34, {liquid:'water'}]


//3)Array.from() method
const myString="hello";
const myArray=Array.from(myString);
console.log(myArray); //[ 'h', 'e', 'l', 'l', 'o' ]









/*---------2)ACCESSING ELEMENTS IN ARRAY--------*/
const arr6=["Simran",85,{name:"Kuyasha"},[0,2,6]];
console.log(arr6[1]); //85 ;accessing individual elements in an array.

//modify value (though arr is declared using const still we can change its value as array is object;const concept is true only for primitive datatypes)
arr6[1]=67;
console.log(arr6[1]);//67
console.log(arr6);//op=>[ 'Simran', 67, { name: 'Kuyasha' }, [ 0, 2, 6 ] ]
 
//accessing value of inner array directly
console.log(arr6[3][2]);//6

//accessing the array outside its range
console.log(arr6[-3]);//undefined   (negative index)
console.log(arr6[7]);//undefined  (index greater than length of the array)

//adding elements at the index of outside array range
arr6[7]=98; //index greater than length
console.log(arr6);//op=>['Simran',67,{ name:'Kuyasha'},[0,2,6],<3 empty items>,98]

arr6[-3]=56;//negative value is used,the arr stores the element as a key-value pair. 
console.log(arr6);
//op=>['Simran',67,{name:'Kuyasha'},[0,2,6],<3 empty items>,98,'-3': 56]          




