//JS variable is not bound to a type but Value is bound to a type.
//If we define var as integer,on the next line we can define it as string.
let age=10; //Number
console.log(age); //op=>10

age="ten"; //String (here we can change the same variable from num to string)
console.log(age); //op=>ten


//METHODS OF CREATING VARIABLE: let,const,var
//1)let =>more strict than var but less strict than const
let roll;//declaration
roll=10;//definition



//2)const=>(most strict one) whose values will not change. Eg:birth-year of a person,pi value etc.
const pi=3.14;
/*
pi=22;  =>this will show error. 
const year; =>error as value must be initialized at the time of declaration of const */



//3)var =>least strict one
var myName;
myName="Kuyasha";
console.log(myName); //op=>Kuyasha


