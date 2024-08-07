
//1)findLast() fn=>The findLast function returns the last element in an array
// that satisfies a given condition defined by a provided function.
// It searches the array from right to left.

const numbers = [10, 20, 30, 40, 50];
const foundNumber_1 = numbers.findLast(function(number) {
        return number > 30;
});
console.log(foundNumber_1); // Outputs: 50

const foundNumber_2 = numbers.findLast(function(number) {
    return number === 80;
});
console.log(foundNumber_2);//Output:undefined




//2)findLastIndex=>
// The findLastIndex function returns the index of the last element in an
// array that satisfies a given condition defined by a provided function.
// It searches the array from right to left.
//If element not foundIndex, returns -1.

const numbers_ = [10, 20, 30, 40, 50];
const foundIndex = numbers_.findLastIndex(function(number) {
      return number > 30;
});
console.log(foundIndex); // Outputs: 4

const foundIndex_3 = numbers_.findLastIndex(function(number) {
    return number === 90;
});
console.log(foundIndex_3);//Output:-1

