
//1)Global Scope=>
//In global scope this points to the window object.
/* Write these code inside chrome console 
console.log(this);
//op=>Window object

var user="John";
console.log(window.user);
op=>John
*/



//2)Implicit Binding
const person1 = {
     name: "John",
     age: 25,
     greet: function(){
         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
     }
};
person1.greet(); 
// Output: Hello, my name is John and I'm 25 years old.


const person2={
    name:"Harry",
};
person2.greet=person1.greet;
person2.greet();
//Output:Hello, my name is Harry and I'm undefined years old.




//3)this inside Arrow Function
const checkArrow=()=>{
    console.log(this);
}
checkArrow();
//op=>Refers to window object inside console



//4)Printing value of this inside block scope
{
    function print(){
        console.log(this)
    }
    print();
}
//op=>refers to global object
