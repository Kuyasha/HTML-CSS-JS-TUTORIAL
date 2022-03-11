//WORKING ON RED BOX(THAT IS MOUSE OUT AND OVER)
var outerDiv=document.getElementById('outer');
outerDiv.addEventListener('mouseover',function()
{
    console.log('Mouse Over');
});

outerDiv.addEventListener('mouseout',function()
{
    console.log('Mouse Out');
});

/*
//WORKING ON INPUT FORM BOX
var searchInput=document.getElementById('search');
searchInput.addEventListener('keypress',function()
{
    console.log('KEY PRESSED');
});
*/

/*
//IF I KEYPRESS ANYWHERE ON THE ENTIRE DOCUMENT IT WILL SHOW KEYPRESS
document.addEventListener('keypress',function()
{
    console.log("key pressed");
});
*/

//TO DETECT WHICH KEY HAS BEEN PRESSED--->this will show keys in their ascii values
document.addEventListener('keydown',function(event)
{
    console.log('key down',event.keyCode); //using event.keyCode; we can find out which key has been pressed
});


