var student=
{
    "name":"KUYASHA",
    roll_no:135,
    marks:90  
};

//METHOD1
for(var i in student)
{
    console.log(i,student[i]);
}

//METHOD2----->getting error
var keys=object.keys(student); 
console.log(keys);

//METHOD3------>getting errror
var keys=object.getOwnPropertyNames(student);
console.log(student);