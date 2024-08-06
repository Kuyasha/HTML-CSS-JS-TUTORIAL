
var userName='Tom';
var userAge=10;
console.log(`username:${userName}`);
console.log(`userage:${userAge}`);

greetUser(userName);

function greetUser(name){
    console.log(`***************************`);
    var greet='I hope you are doing fine.';
    console.log(`hello ${name}, ${greet}`);
    var currentYear=2030;
    const year=bYear(currentYear,userAge);
    console.log(`***************************`);
    return `Your birthyear is ${year}`;
}

function bYear(year,age){
    console.log(`Calculating the birth year`);
    return year-age;
}

const birthYear=greetUser(userName);
console.log(birthYear);


/*op=>
username:Tom
userage:10
***************************
hello Tom, I hope you are doing fine.
Calculating the birth year
***************************
***************************
hello Tom, I hope you are doing fine.
Calculating the birth year
***************************
Your birthyear is 2020
*/