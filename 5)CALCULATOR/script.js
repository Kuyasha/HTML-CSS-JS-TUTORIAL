var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;


//handle clicks on all buttons;for every button add listener
for(var i=0;i<buttons.length;i++)
{
  buttons[i].addEventListener('click',function(){
      //first we need to figure out which button it has clicked
      var value=this.getAttribute('data-value');
      if(value=='+'|| value=='-' || value=='/' || value=='*')
      {
        operator= that particular operator;
        operand1=parseFloat(display.textContent);
      }
      else if(value=='=') //we can get operand2 only when "=" is clicked      
      {
        operand2=parseFloat(display.textContent);
        //use eval to get result
        //show result on display
      }
      else //means that value is a number, so we need to display it
      {
        display.innerText += value;
      }

  });
}
