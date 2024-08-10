
function isValidIdentifier(input)
{
    if (input === "" || !isNaN(input[0]))
    {
       console.log(input + " is not a valid identifier.");
       return;
    }
    else{
       ans =true;
       for (var i = 0; i < input.length; i++)
        {
           var char = input[i];
        //Check if the character is a letter, digit, underscore, or dollar sign
           if(! ((char>="a" && char<="z")||(char>="A" && char<="Z")||(char==="_")||(char==="$")||(!isNaN(char) && i>0)) ) // Allow digits after the first character
              {
               ans =false;
              }  
        }

        if(ans)
         {
  	       console.log(input + " is a valid identifier.");
	      }
	    else
         {
           console.log(input + " is not a valid identifier.");
	      }
    }
}

isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.