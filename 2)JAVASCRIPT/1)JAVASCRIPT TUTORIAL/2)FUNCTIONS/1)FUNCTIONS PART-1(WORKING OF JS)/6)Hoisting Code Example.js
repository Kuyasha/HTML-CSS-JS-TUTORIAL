console.log(`username:${userName}`);
console.log(`userage:${userAge}`);
greetUser(userName);


var userName='Tom';
var userAge=10;
console.log(`username:${userName}`);
console.log(`userage:${userAge}`);

function greetUser(name){
    var greet='I hope you are doing fine.';
    console.log(`hello ${name}, ${greet}`);
    var currentYear=2030;
    const year=currentYear-userAge;
    return `Your birthyear is ${year}`;
}
const birthYear=greetUser(userName);
console.log(birthYear);
/*
op=>
username:undefined
userage:undefined
hello undefined, I hope you are doing fine.

username:Tom
userage:10
hello Tom, I hope you are doing fine.
Your birthyear is 2020
*/