//USING NORMAL FUNCTION
function greet(){
    setTimeout(()=>{
        console.log("Hello");
    },1000);
}

function message(){
    console.log("message");
}

greet();
message();

//op=>message
//    Hello
//Here message is printed first whereas greet() fn is called first; as it
//takes 1 secs time for the greet() fn to be executed.









//USING CALLBACK FN 
//(When we want to print the message only after hello is printed and not
// before that. In that case we can pass the message as a callback fn to
//greet() fn )

function greet(callback){
    setTimeout(()=>{
        console.log("Hello");
        callback();
    },1000);
}

function message(){
    console.log("message");
}

greet(message);

//op=>Hello
//    meassage

