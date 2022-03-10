//I want to change the 1st paragraph and change its text to Welcome-->

//using Javascript code:
var para1=document.getElementById('para1');
para1.innerHTML="Welcome";


//USING JQUERY
$('#para1').html('Welcome');

/* HOW DOLLAR FN WORKS?
function $(query)
{
   return document.querySelector(query); //here dollar fn is returning a dom object not a html fn.
}
*/

//Now if i want to hide paragraph 1-->
$('#para1').hide();

//Changing all the paragraphs to Welcome
$('p').html("Welcome");