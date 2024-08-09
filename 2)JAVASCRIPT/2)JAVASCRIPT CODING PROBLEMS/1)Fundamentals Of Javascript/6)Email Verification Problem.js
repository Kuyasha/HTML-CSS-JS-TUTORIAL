/*  EMAIL VERIFICATION
Problem Statement=> Input an email and check whether that email is
Authenticated or not.
Few Conditions for Authenticated Email:-
1)length of the email should be greater than 11
2)After dot in the email id, only 2 or 3 characters are allowed
3)Atleast 3 characters between @ and dot.
*/


    //SOLUTIONS 
         
/*  1)VIDEO CODE 
const email=prompt("Enter the email address");
const emailLen=email.length;
const dotIndex=email.lastIndexOf(".");
const atIndex=email.lastIndexOf("@");
const lastIndex=emailLen-1;

if(emailLen<11 || lastIndex-dotIndex<2 || lastIndex-dotIndex>3 || dotIndex-atIndex<3)
{
   console.log("Invalid Email");
}
*/




/*  MY CODE  
function main(email){
    let result;
    const emailLen=email.length;
    const dotIndex=email.lastIndexOf(".");
    const atIndex=email.lastIndexOf("@");
    const lastIndex=emailLen-1;
            
    if(emailLen>11 &&
       (lastIndex-dotIndex==2 || lastIndex-dotIndex==3) &&
       dotIndex-atIndex>=3 &&
       atIndex==3)
        {
           result="xyz@gmail.com is valid";
        }
    else{
        result="invalid email";    
    }
        
        return result;
    }
*/




// TA CODE  [CORRECT SOLUTION]
function main(email){
    let result;
    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf(".");
    let len = email.length;
    if (atIndex >= 3 && dotIndex - atIndex >= 4 && len - dotIndex - 1 >= 2)
     {
        result = "Welcome " + email + " to our site";
    }
    else {
            result = "invalid email";
    }
    return result;
}    