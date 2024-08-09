/*
PROBLEM STATEMENT=>Create a program that determines if a patient has a fever
based on their body temperature reading.

Objectives:
The temperature will be given in Fahrenheit, and you need to convert it to
Celsius with one decimal place precision.The program should display the
converted temperature and a statement indicating whether the patient has a
fever or not.

Hints:
A body temperature above 37 degrees Celsius is considered to indicate a
fever.Make sure to round the converted temperature to one decimal place
using the toFixed() method.
*/


function main(tempF) {
    let result;
    let tempC=(tempF-32)*5/9;
    result=tempC.toFixed(1);  
    if(result>37)
      {
        console.log(result);
        console.log("The patient has fever"); 
      }
    else
      {
        console.log(result);
        console.log("The patient does not have fever");
      }
    return result;
  }
  
  main(0);
  main(100);
  main(200);