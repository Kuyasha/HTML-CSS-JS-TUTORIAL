
// BREAK  VS  CONTINUE
//Only First 5 even nos
const inputs=[11,32,12,45,65,94,7,78,10,100,131,67,81,92,53];
const evenNumbers=[];
for(let i of inputs)
{
    if(i%2 !== 0)//here we are using continue for odd numbers.
    {
        continue;
    }
    evenNumbers.push(i);
    if(evenNumbers.length === 5){
        break;
    } 
}
console.log(evenNumbers);//op=>32 12 94 78 10