var a=1/0;
console.log(a);

a=2/Infinity;
console.log(a);

a=Infinity+1;
console.log(a);

a=Infinity-1;
console.log(a);

a=Infinity*1;
console.log(a);

console.log(Math.pow(10,2));
console.log(Math.pow(10,100));
console.log(Math.pow(10,1000)); //this is beyond the number that can be stored in js; so output=Infinity

//MAXIMUM number that can be stored at js
console.log(Number.MAX_VALUE);

//NAN-->NOT A NUMBER
console.log(Math.sqrt(-1));

//PARSEINT USE --->converts string to integer
console.log(parseInt("100")); //output=100
console.log(parseInt("aaaa")); //output=NAN; coz cant convert this alphabetical string to integer

//TypeOf --->to find out the type of variable
console.log(typeof(10));
console.log(typeof(true));
console.log(typeof("aaa"));

var b;
console.log(typeof(b));

b=null;
console.log(typeof(b)); //type of null=object
console.log(typeof(Infinity));//type of Infinity=number
console.log(typeof(NaN)); //type of NaN=not a number
console.log(typeof("-1"));
