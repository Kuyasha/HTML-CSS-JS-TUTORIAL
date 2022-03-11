var student={
    name:"Kuyasha",
    roll:145,
    address:{
        city:"Kolkata",
        pincode:700075
    }
};

console.log(student)

//Accessing Nested Objects
console.log(student.address.pincode);  //--->method1
console.log(student["address"]["city"]);  //--->method1



