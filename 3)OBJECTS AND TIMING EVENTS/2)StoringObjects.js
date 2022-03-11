var obj1={
    "property1": 10
};
var obj2=obj1; //obj1 is assigned to obj2
console.log(obj1);//op=>10
console.log(obj2);//op=>10

console.log("AFTER UPDATING PROPERTY1 VALUE OF obj2:")
obj2.property1=98; //property1 of obj2 is changed to 98
console.log(obj2);//op=>98
console.log(obj1);//op=>98


//check if obj1==obj2
console.log(obj1==obj2);  //op=>true

