//CURRYING IN JS

//1)Addition
function add1(a,b,c){
    return a+b+c;
}
console.log(add1(2,5,10));//9

//Using Currying
function add2(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add2(2)(5)(10));//17




//2)POWER fn
function power1(a,b){
    return b ** a;
}
console.log(power1(5,2));//32 (a=5,b=2)

//Using Currying
function power2(b){
    return function(a){
        return b ** a;
    }
}
//Invoking method-1
const square=power2(2); //b=2 
console.log(square(5)); //32 (a=5,b=2,power2(b),square(a);b**a=2^5=32) 

//Invoking method-2
console.log(power2(2)(5));//32





//3)GREETING-1 (Using Currying)
function greet(message){
    return function wish(wishes){
        console.log(`${wishes},${message}`);
    }
}

//Invoking Method-1
const greeting=greet("Welcome to the session");
greeting('Hi');
//op=>Hi,Welcome to the session

//Invoking Method-2
greet('Welcome to the session')('Hi');
//op=>Hi,Welcome to the session

/*
[Passing Arguement order=>message wish
Printing Order=>wish message] (It will print the way it returned from the fn)
*/





//4)GREETING-2 (using currying)
function generateGreeting(greet){
    return function(name){
        return function(title){
            return `${greet}, ${title} ${name}!`;
        }
    } 
}
const message1=generateGreeting("hello")("Alice")("Dr.");
const message2=generateGreeting("Hi")("Bob")("Mr.");
console.log(message1);//hello, Dr. Alice!
console.log(message2);//Hi, Mr. Bob!
/*
[Arguement order=>greet name title
Printing Order=>greet title name]
*/
