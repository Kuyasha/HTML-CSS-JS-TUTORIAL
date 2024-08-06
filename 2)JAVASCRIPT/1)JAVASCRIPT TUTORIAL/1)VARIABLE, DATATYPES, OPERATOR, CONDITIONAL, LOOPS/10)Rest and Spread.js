
//1)REST OPERATOR => [...name]
const aprilBatch=['Tina','Madhur'];
const mayBatch=['Ritik','Deepak','Shalini'];
const juneBatch=['Saba','Shivani'];
const julyBatch=[];

/*
function addStudent(batch, student){
    batch.push(student);
    console.log(batch);
}
addStudent(aprilBatch,'Ritu');//op=>[ 'Tina', 'Madhur', 'Ritu' ]
addStudent(mayBatch, 'Sunny');//op=>[ 'Ritik', 'Deepak', 'Shalini', 'Sunny' ]
*/

//Creating the above function using Rest Operator.
function addStudents(newBatch, ...students){
     for(let i of students){
        newBatch.push(i);
     }
     console.log(newBatch);
}
addStudents(aprilBatch,"Sunny","Sheeran","Revati");




//2)SPREAD OPERATOR
const arr1=[1,2,3];
const arr2=[4,5,6];
const arr3=[...arr1, ...arr2];
console.log(arr3);











