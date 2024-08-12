/*
In the given code removeVowels is an impure function that is used to remove
all the vowels from the value property of obj.
But the removeVowels modify the original object and you don't want that.

Refactor the code to make it a pure function so that instead of modifying
the original object, it returns a new Object with a modified value.



function removeVowels(obj) {
  obj.value = obj.value.replace(/[aeiou]/gi, "");
}
let strObj = { value: "Hello World" };
removeVowels(strObj);
console.log(strObj.value);
*/


function removeVowels(obj) {
    //obj.value = obj.value.replace(/[aeiou]/gi, "");
      return { value : obj.value.replace(/[aeiou]/gi, "")}
  }
  
  let strObj = { value: "Hello World" };
  
  newObj = removeVowels(strObj);
  
  console.log(newObj.value);