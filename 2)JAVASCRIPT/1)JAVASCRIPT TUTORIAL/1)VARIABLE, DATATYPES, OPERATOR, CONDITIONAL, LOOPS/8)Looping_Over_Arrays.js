
//1)FOR LOOP
const students=[
    'Tina',
    'Raj',
    'Bobby',
    'Seema',
    'Alex',
    'Sita'
];
for(let i=0;i<students.length;i++)
{
    console.log(`Roll No ${i+1}: ${students[i]}`); 
}

/*op=>
Roll No 1: Tina
Roll No 2: Raj
Roll No 3: Bobby
Roll No 4: Seema
Roll No 5: Alex
Roll No 6: Sita
*/






//2) for...in loop
const St_udents=[
    'Tina',
    'Raj',
    'Bobby',
    'Seema',
    'Alex',
    'Sita'
];
//i will start from the initial index of St_udents
//this line is same as : for(let i=0;i<students.length;i++)
for(let i in St_udents){ 
    //console.log(`Roll No ${i+1}: ${St_udents[i]}`); //unexpected result
                //because datatype of i(iterator) in for..loop is string

/*op=>Roll No 01: Tina
Roll No 11: Raj
Roll No 21: Bobby
Roll No 31: Seema
Roll No 41: Alex
Roll No 51: Sita
 */  
    
    //correct code
    console.log(`Roll No ${Number(i)+1}: ${St_udents[i]}`);
/*correct code op=>
Roll No 1: Tina
Roll No 2: Raj
Roll No 3: Bobby
Roll No 4: Seema
Roll No 5: Alex
Roll No 6: Sita   
*/
}







//3)for...of loop
const S_tudents=[
    'Tina',
    'Raj',
    'Bobby',
    'Seema',
    'Alex',
    'Sita'
];
//here iterator is student.And student is not the index number,student represents
//each elements of the array S_tudents.
//So when we directly want to use array elements we use for..of loop.
for(let student of S_tudents)
{
    console.log(student);
}
/*op=>
//Tina
//Raj
//Bobby
//Seema
//Alex
//Sita
*/






//4)FOR EACH METHOD
var arr2=[5,8,9,8];
function print(element) //this fn can have two more optional arguements-->index and arr2
{
    console.log(element);
}
arr2.forEach(print); //op=>5 8 9 8  (just pass the fn name)


const numbers=[1,2,3];
numbers.forEach(function(number){
    console.log(number*3)
});
//op=>3 6 9






