//1)not mentioned the datatype still got the correct answer
a=10;
console.log(a); //10

/*
//2)here RefernceError(x is not listed in the creation phase of global execution context) 
console.log(x);//x is not defined
x=10;
*/

//3)y is listed in the global execution context as declaration of y(var y)
// is hoisted to the top; but its value is not defined yet.
console.log(y);
var y=90; 
//op=>undefined


/*
//4)When using let (let z is hoisted but its value cant be accessed due to TDZ)
console.log(z);
let z=90; //Error:cant acces z before initialization
*/


//5)
let w=10;
{
  console.log(w); //op=>10
}



//6)Although v is defined in the global scope,let,const variables are hoisted
//but they are inaccessible till the point they are defined
let v=10;
{
    console.log(v); //RefernceError:cant access v before initialization
    let v=20;
}





