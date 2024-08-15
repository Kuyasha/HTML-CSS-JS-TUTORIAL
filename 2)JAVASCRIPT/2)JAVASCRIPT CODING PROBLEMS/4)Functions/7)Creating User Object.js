/*
You are given three arrays containing the id, name, and image of users.

Objectives
Create a function with a name createUserObjects that takes three arrays as a
parameter and returns an array of objects representing the user. 
Use the map function to create objects from the arrays.
The mapping should be done in such a way that for the first object, the first
element of all arrays should be used, and so on.

Input:
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
createUserObjects(ids,names,images);

*/

const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
    function createUserObjects(ids,names,images){
        const users=ids.map((id,index)=>{
            return{
                id: id,
                name: names[index],
                image: images[index]
            };
        });
        return users;
    }

/*
    Output:
    [
      { id: 1, name: 'John', image: 'john.jpg' },
      { id: 2, name: 'Jane', image: 'jane.jpg' },
      { id: 3, name: 'Alice', image: 'alice.jpg' }
    ]

*/
    