//CREATING AN OBJECT
console.log("STUDENT1:");
var student1={}; //--->method1
//var student1=new Object();---->//method2
console.log(student1);
console.log(typeof(student1));


//CREATING OBJECTS WITH PROPERTIES
console.log("STUDENT2:");
var student2 ={name:"KUYASHA",
               rollnumber:135,
               marks:90
               }; //--->method1
var student2 =new Object({name:"KUYASHA",
                        rollnumber:135,
                         marks:90
                        }); //--->method 2
console.log(student2);

//ACCESSING PROPERTIES FROM STUDENT2
console.log("AFTER UPDATING MARKS OF STUDENT2:");
student2.marks=100;
console.log(student2);
console.log("AFTER ADDING sem PROPERTY:");
student2.sem=4;
console.log(student2);
console.log("ACCCESSING UNDEFINED PROPERTY:");
console.log(student2.department);//output=Undefined (not error)

//DELETING PROPERTIES
console.log("DELETING sem PROPERTY");
delete student2.sem;
console.log(student2);
