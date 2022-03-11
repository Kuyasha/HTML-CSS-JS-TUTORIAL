function  outer()
{
    var outerVar=10;

    function inner()
    {
        console.log(outerVar);
    }
    
    inner();
}
//inner(); -->cant acccess it here
outer();



