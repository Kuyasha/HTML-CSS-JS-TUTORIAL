//Strictness level of const is more than let.


//1)Re-declaration,Re-assigned is allowed in var.
var a=10;
var a=55;
console.log(a);//55


//2)Re-declaration not allowed,Re-assigned is allowed in let.
let b=45;
/*let b=89;
console.log(b); */
//op=>Identifier b has already been declared.

b=67; //re-assign is allowed
console.log(b);//67


//3)Both Re-declaration,Re-assigned not allowed.
const c=90;
c=87;
console.log(c);
//op=>TypeError: Assignment to constant variable.
