//1)FOR LOOP(When we know the specific number of iterations,use for loop)
//entry control loop
//printing all odd nos from 1 to 50.
for(let i=1;i<50;i=i+2)
{
   console.log(i);
}



//2)WHILE LOOP (When we dont know how many times to iterate;use while loop)
//entry control loop
//Print individual digit of this number
let num=12345;
while(num!=0)
{
    let digit=num%10;
    num=parseInt(num/10);
    console.log(digit);
}



//3)DO WHILE LOOP (Code runs n+1 times for do...while loop)
//exit control loop (whatever is written inside do while loop it will excute
//at least once then it will check the condition )
//code-1
let num2;
do{
    num=prompt("Enter a Number");
}while(num2<=50);

//code-2
let i=1;
let sum=0;
do{
    sum=sum+i;
    i++;
}while(i<=5);
console.log(sum);

