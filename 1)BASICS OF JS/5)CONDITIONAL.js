//IF ELSE
var a=2;
if(a>0)
{
    console.log("POSITIVE");
}
else{
    console.log("Zero");
}

//ELSE IF
var a=-2;
if(a>0)
{
    console.log("POSITIVE");
}
else if(a<0){
    console.log("NEGATIVE");
}
else{
    console.log("ZERO");
}


//SOME MORE EXAMPLES
var a=-2; //As it is a number it will be true; only 0 will give false.
          //Empty string, undefined, null give false here.
if(a)
{
    console.log("True");
}
else{
    console.log("False");
}